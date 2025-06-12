
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { MessageCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  buttonSection: string;
}

const ContactForm = ({ isOpen, onClose, buttonSection }: ContactFormProps) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [patrimonio, setPatrimonio] = useState('');
  const [valorMensal, setValorMensal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    phone?: string;
    patrimonio?: string;
    valorMensal?: string;
  }>({});

  const formatPhone = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara +55 (xx) xxxxx-xxxx
    if (numbers.length <= 2) {
      return `+55 (${numbers}`;
    } else if (numbers.length <= 7) {
      return `+55 (${numbers.slice(2, 4)}) ${numbers.slice(4)}`;
    } else {
      return `+55 (${numbers.slice(2, 4)}) ${numbers.slice(4, 9)}-${numbers.slice(9, 13)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!phone) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (phone.replace(/\D/g, '').length !== 13) {
      newErrors.phone = 'Telefone deve ter 11 dígitos';
    }

    if (!patrimonio) {
      newErrors.patrimonio = 'Patrimônio é obrigatório';
    }

    if (!valorMensal) {
      newErrors.valorMensal = 'Valor mensal é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const redirectToWhatsApp = () => {
    const phoneNumber = '5521998883771';
    const message = encodeURIComponent('Olá! Acabei de preencher o formulário e gostaria de saber mais sobre a Duop.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('pix_phone_submissions')
        .insert({
          Email: email,
          phone_number: phone,
          Patrimonio: patrimonio,
          'Investir Mês': valorMensal,
          'Ja foi contatado?': 'Não',
          plan_title: 'dadosdomercado'
        });

      if (error) {
        console.error('Erro ao enviar formulário:', error);
        alert('Erro ao enviar formulário. Tente novamente.');
        return;
      }

      // Enviar evento para o GTM
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submission',
          form_type: 'contact_form',
          button_section: buttonSection,
          email: email,
          phone: phone,
          patrimonio: patrimonio,
          valor_mensal: valorMensal
        });
      }

      alert('Formulário enviado com sucesso! Você será redirecionado para o WhatsApp.');
      
      // Limpar formulário e fechar modal
      setEmail('');
      setPhone('');
      setPatrimonio('');
      setValorMensal('');
      setErrors({});
      onClose();

      // Redirecionar para WhatsApp após um pequeno delay
      setTimeout(() => {
        redirectToWhatsApp();
      }, 1000);
      
    } catch (error) {
      console.error('Erro inesperado:', error);
      alert('Erro inesperado. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-900">
            Entre em Contato Conosco
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+55 (11) 99999-9999"
              value={phone}
              onChange={handlePhoneChange}
              className={errors.phone ? "border-red-500" : ""}
              maxLength={19}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="patrimonio">Patrimônio líquido investido *</Label>
            <Select value={patrimonio} onValueChange={setPatrimonio}>
              <SelectTrigger className={errors.patrimonio ? "border-red-500" : ""}>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="até-50mil">Até R$ 50 mil</SelectItem>
                <SelectItem value="50mil-150mil">R$ 50 mil - R$ 150 mil</SelectItem>
                <SelectItem value="150mil-300mil">R$ 150 mil - R$ 300 mil</SelectItem>
                <SelectItem value="300mil-500mil">R$ 300 mil - R$ 500 mil</SelectItem>
                <SelectItem value="500mil-1milhao">R$ 500 mil - R$ 1 milhão</SelectItem>
                <SelectItem value="acima-1milhao">Acima de R$ 1 milhão</SelectItem>
              </SelectContent>
            </Select>
            {errors.patrimonio && (
              <p className="text-sm text-red-500">{errors.patrimonio}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="valorMensal">Valor disponível para investir por mês *</Label>
            <Select value={valorMensal} onValueChange={setValorMensal}>
              <SelectTrigger className={errors.valorMensal ? "border-red-500" : ""}>
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="até-300">Até R$ 300</SelectItem>
                <SelectItem value="300-500">R$ 300 - R$ 500</SelectItem>
                <SelectItem value="500-1000">R$ 500 - R$ 1.000</SelectItem>
                <SelectItem value="1000-3000">R$ 1.000 - R$ 3.000</SelectItem>
                <SelectItem value="3000-5000">R$ 3.000 - R$ 5.000</SelectItem>
                <SelectItem value="5000-10000">R$ 5.000 - R$ 10.000</SelectItem>
                <SelectItem value="acima-10000">Acima de R$ 10.000</SelectItem>
              </SelectContent>
            </Select>
            {errors.valorMensal && (
              <p className="text-sm text-red-500">{errors.valorMensal}</p>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-emerald-500 hover:bg-emerald-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
