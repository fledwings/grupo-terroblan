import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2, User, Building, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from '@/lib/supabase';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { data, error } = await supabase.functions.invoke('send-email', {
        body: formData,
      });

      if (error) throw error;
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contacto y Solicitud de Servicio</h1>
          <p className="text-lg text-slate-600">
            Complete el siguiente formulario con los detalles de su solicitud. Nuestro equipo de ingeniería analizará sus requerimientos y se pondrá en contacto con usted a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Company Information Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="bg-slate-900 text-white border-slate-800 shadow-xl overflow-hidden h-full relative">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
              
              <CardContent className="p-8 relative z-10 space-y-8 h-full flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Grupo Terroblan Industrial</h3>
                  <p className="text-slate-300">Soluciones integrales para la industria moderna.</p>
                </div>

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Teléfono</p>
                      <a href="tel:4426767696" className="text-slate-300 hover:text-orange-400 transition-colors block">442-676-7696</a>
                      <a href="tel:4271200178" className="text-slate-300 hover:text-orange-400 transition-colors block">427-120-0178</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Correo Electrónico</p>
                      <a href="mailto:arturo.trejo@grupoter.com.mx" className="text-slate-300 hover:text-orange-400 transition-colors break-all block">arturo.trejo@grupoter.com.mx</a>
                      <a href="mailto:angel.trejo@grupoter.com.mx" className="text-slate-300 hover:text-orange-400 transition-colors break-all block">angel.trejo@grupoter.com.mx</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg">Ubicación</p>
                      <p className="text-slate-300">Querétaro, México</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-800">
                  <p className="text-sm text-slate-400">
                    Horario de atención:<br/>
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl border-slate-200">
              <CardContent className="p-8">
                {submitStatus === 'success' ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">¡Mensaje Enviado con Éxito!</h3>
                    <p className="text-slate-600 max-w-md mx-auto">
                      Gracias por contactarnos. Hemos recibido su solicitud y nuestro equipo se comunicará con usted a la brevedad.
                    </p>
                    <Button 
                      className="mt-6 bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => setSubmitStatus(null)}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input 
                            id="name" 
                            name="name" 
                            required 
                            placeholder="Ej. Juan Pérez" 
                            className="pl-10"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa *</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input 
                            id="company" 
                            name="company" 
                            required 
                            placeholder="Nombre de su empresa" 
                            className="pl-10"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Correo Electrónico *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            required 
                            placeholder="correo@empresa.com" 
                            className="pl-10"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input 
                            id="phone" 
                            name="phone" 
                            type="tel" 
                            required 
                            placeholder="10 dígitos" 
                            className="pl-10"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Servicio Solicitado *</Label>
                      <Select required value={formData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="obra-civil">Obra Civil y Construcción</SelectItem>
                          <SelectItem value="mantenimiento">Mantenimiento Industrial</SelectItem>
                          <SelectItem value="estructura-metalica">Estructura Metálica</SelectItem>
                          <SelectItem value="remodelaciones">Remodelaciones y Acabados</SelectItem>
                          <SelectItem value="otro">Otro servicio / Consulta general</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje o Detalles del Proyecto *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="Describa brevemente sus necesidades o el proyecto que tiene en mente..." 
                        className="min-h-[150px] resize-y"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 text-red-600 rounded-md border border-red-200">
                        Hubo un error al enviar su mensaje. Por favor, intente nuevamente o contáctenos por teléfono.
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando Solicitud...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" />
                          Enviar Solicitud de Servicio
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}