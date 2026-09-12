import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  CheckCircle2, 
  Hammer, 
  ShieldCheck,
  User,
  Mail,
  MapPin,
  Layers,
  Sparkles
} from 'lucide-react';
import { QualificationFormData } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface QualificationFormProps {
  initialService?: string;
  onSuccess?: () => void;
  className?: string;
}

export const QualificationForm: React.FC<QualificationFormProps> = ({
  initialService,
  onSuccess,
  className = ''
}) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [formData, setFormData] = useState<QualificationFormData>({
    selectedServices: initialService ? [initialService] : ['Patios'],
    frequency: 'As soon as possible',
    name: '',
    phone: '',
    email: '',
    zipCode: '',
    propertySize: 'Medium garden / driveway',
    notes: ''
  });

  const serviceOptions = [
    { id: 'Patios', label: 'Patios & Paving', desc: 'Porcelain, sandstone & terraces' },
    { id: 'Driveways', label: 'Driveways', desc: 'Block paving, gravel & resin' },
    { id: 'Fencing', label: 'Fencing', desc: 'Closeboard, panels & timber posts' },
    { id: 'Artificial Turf', label: 'Artificial Turf', desc: 'Mud-free synthetic lawns' },
    { id: 'Turfing', label: 'Turfing (Natural)', desc: 'Ground prep & fresh turf' },
    { id: 'Decking', label: 'Decking', desc: 'Composite & timber platforms' },
    { id: 'Gates', label: 'Gates', desc: 'Timber side gates & security' },
    { id: 'General Building', label: 'General Building', desc: 'Garden walls, brickwork & steps' },
  ];

  const timeframeOptions = [
    { id: 'As soon as possible', title: 'As Soon As Possible', desc: 'Ready for quote & site visit immediately', badge: 'Priority' },
    { id: 'Within 1-2 Months', title: 'Within 1–2 Months', desc: 'Looking to schedule for upcoming weeks', badge: 'Standard' },
    { id: '3+ Months / Planning', title: '3+ Months / Planning', desc: 'Early planning & budget pricing', badge: 'Planning' },
    { id: 'Flexible', title: 'Flexible', desc: 'Open to when work can be fitted in', badge: 'Flexible' }
  ];

  const projectScales = [
    'Small project (Single path, small gate, fence repair)',
    'Medium project (Standard patio, driveway or lawn)',
    'Large project (Full garden makeover, terrace & walls)',
    'Commercial / Agricultural / General Building'
  ];

  const toggleService = (serviceId: string) => {
    setFormData(prev => {
      if (prev.selectedServices.includes(serviceId)) {
        const next = prev.selectedServices.filter(s => s !== serviceId);
        return { ...prev, selectedServices: next.length === 0 ? ['Patios'] : next };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, serviceId] };
      }
    });
  };

  const validateStep3 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 6) newErrors.phone = 'Valid phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email address is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Postcode or town in Malton area required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && formData.selectedServices.length === 0) {
      setFormData(prev => ({ ...prev, selectedServices: ['Patios'] }));
    }
    if (step === 3) {
      if (!validateStep3()) return;
    }
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 3 && !validateStep3()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      selectedServices: ['Patios'],
      frequency: 'As soon as possible',
      name: '',
      phone: '',
      email: '',
      zipCode: '',
      propertySize: 'Medium garden / driveway',
      notes: ''
    });
  };

  return (
    <div
      id="qualification-form-container"
      className={`bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-gray-200 relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Header Red Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#d7393e]" />

      {!isSubmitted ? (
        <>
          {/* Header */}
          <div className="mb-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#d7393e]/10 text-[#d7393e] border border-[#d7393e]/20 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d7393e] animate-pulse" />
                STEP {step} OF 4
              </span>
              <span className="text-xs font-bold text-[#111512]">
                100% Free • No Obligation
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-[#111512] font-display">
              Request Your Free Quote
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
              Tell Matt what you have in mind for your property in Malton or surrounding North Yorkshire.
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 h-1.5 rounded-full mt-3.5 overflow-hidden">
              <div
                className="bg-[#d7393e] h-full transition-all duration-300 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Wizard Body */}
          <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
            {/* STEP 1 */}
            {step === 1 && (
              <div className="space-y-3.5 animate-in fade-in duration-200" id="form-step-1">
                <p className="text-sm font-semibold text-[#111512]">
                  Select the services you're interested in:
                </p>

                <div className="grid grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {serviceOptions.map((opt) => {
                    const isSelected = formData.selectedServices.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleService(opt.id)}
                        className={`text-left p-3 rounded-xl border text-xs transition-all duration-150 relative cursor-pointer group flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#d7393e] bg-[#d7393e]/5 text-[#111512] font-bold ring-1 ring-[#d7393e]/30 shadow-xs'
                            : 'border-gray-200 bg-[#FAFBF8] hover:border-gray-400 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-1">
                          <span className="font-bold text-xs text-[#111512]">{opt.label}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-[#d7393e] border-[#d7393e] text-white' : 'border-gray-300'
                          }`}>
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-500 line-clamp-1">{opt.desc}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    id="step1-continue-btn"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111512] hover:bg-black text-white font-bold text-sm shadow-md transition-colors cursor-pointer group"
                  >
                    <span>Continue to Project Timeline</span>
                    <ArrowRight className="w-4 h-4 text-[#d7393e] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="space-y-3.5 animate-in fade-in duration-200" id="form-step-2">
                <p className="text-sm font-semibold text-[#111512]">
                  When would you like the work carried out?
                </p>

                <div className="space-y-2.5">
                  {timeframeOptions.map((freq) => {
                    const isSelected = formData.frequency === freq.id;
                    return (
                      <button
                        key={freq.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, frequency: freq.id })}
                        className={`w-full text-left p-3 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'border-[#d7393e] bg-[#d7393e]/5 text-[#111512] ring-1 ring-[#d7393e]/30 shadow-xs'
                            : 'border-gray-200 bg-[#FAFBF8] hover:border-gray-300 text-[#111512]'
                        }`}
                      >
                        <div className="pr-2">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-[#111512]">{freq.title}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isSelected ? 'bg-[#d7393e] text-white' : 'bg-gray-100 text-gray-600'
                            }`}>
                              {freq.badge}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">{freq.desc}</p>
                        </div>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#d7393e] border-[#d7393e] text-white' : 'border-gray-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="p-3 rounded-xl border border-gray-200 text-[#111512] hover:bg-gray-50 text-sm font-medium transition-colors flex items-center justify-center"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    id="step2-continue-btn"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111512] hover:bg-black text-white font-bold text-sm shadow-md transition-colors cursor-pointer group"
                  >
                    <span>Continue to Contact Info</span>
                    <ArrowRight className="w-4 h-4 text-[#d7393e] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="space-y-3 animate-in fade-in duration-200" id="form-step-3">
                <p className="text-sm font-semibold text-[#111512]">
                  Where should we send your quote?
                </p>

                <div>
                  <label className="block text-xs font-bold text-[#111512] mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="form-input-name"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d7393e] transition-all ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#111512] mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        id="form-input-phone"
                        required
                        placeholder="07910 123 456"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-3 py-2 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d7393e] transition-all ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#111512] mb-1">
                      Town / Postcode *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="form-input-zip"
                        required
                        placeholder="e.g. Malton / YO17"
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        className={`w-full pl-10 pr-3 py-2 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d7393e] transition-all ${
                          errors.zipCode ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                        }`}
                      />
                    </div>
                    {errors.zipCode && <p className="text-[11px] text-red-600 mt-0.5">{errors.zipCode}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111512] mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="form-input-email"
                      required
                      placeholder="john@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-3 py-2 bg-[#FAFBF8] border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d7393e] transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-gray-200'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#111512] mb-1">
                    Scale of Project (Optional)
                  </label>
                  <select
                    id="form-select-size"
                    value={formData.propertySize}
                    onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#FAFBF8] border border-gray-200 rounded-xl text-xs text-[#111512] focus:outline-none focus:ring-2 focus:ring-[#d7393e]"
                  >
                    {projectScales.map((sz) => (
                      <option key={sz} value={sz}>{sz}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="p-3 rounded-xl border border-gray-200 text-[#111512] hover:bg-gray-50 text-sm font-medium transition-colors flex items-center justify-center"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    id="step3-continue-btn"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111512] hover:bg-black text-white font-bold text-sm shadow-md transition-colors cursor-pointer group"
                  >
                    <span>Final Step</span>
                    <ArrowRight className="w-4 h-4 text-[#d7393e] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div className="space-y-3.5 animate-in fade-in duration-200" id="form-step-4">
                <div>
                  <label className="block text-sm font-bold text-[#111512] mb-1">
                    Project details & measurements
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    Tell Matt about the area size, current ground condition, preferred materials (e.g. porcelain vs sandstone), or specific access details.
                  </p>
                  <textarea
                    id="form-textarea-notes"
                    rows={3}
                    placeholder="e.g. Need old concrete patio broken out and replaced with Indian sandstone, approx 6m x 4m with timber side gate..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 bg-[#FAFBF8] border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d7393e] resize-none"
                  />
                </div>

                {/* Summary Pill Badge */}
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-[#111512]">
                    <span>Selected Services:</span>
                    <span className="text-[#d7393e]">{formData.selectedServices.join(', ')}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Target Date & Area:</span>
                    <span>{formData.frequency} • {formData.zipCode || 'Malton area'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="p-3 rounded-xl border border-gray-200 text-[#111512] hover:bg-gray-50 text-sm font-medium transition-colors flex items-center justify-center"
                    aria-label="Previous step"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="submit"
                    id="submit-qualification-btn"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#d7393e] hover:bg-[#be2e33] text-white font-black text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Submit Free Quote Request</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </>
      ) : (
        /* SUCCESS STATE */
        <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200" id="form-success-state">
          <div className="w-16 h-16 rounded-2xl bg-[#d7393e]/10 text-[#d7393e] mx-auto flex items-center justify-center border border-[#d7393e]/20">
            <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#d7393e] bg-[#d7393e]/10 px-3 py-1 rounded-full">
              Enquiry Received
            </span>
            <h3 className="text-2xl font-black text-[#111512] mt-2 font-display">
              Thank You, {formData.name || 'Customer'}.
            </h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto mt-2 leading-relaxed">
              Matt at Bowmanscapes has received your project details. We will contact you shortly to arrange a suitable time for a free site assessment in the Malton area.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAFBF8] border border-gray-200 max-w-xs mx-auto text-left text-xs space-y-1.5">
            <div className="flex items-center gap-2 text-[#111512] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#d7393e]" />
              <span>Bowmanscapes Commitment</span>
            </div>
            <p className="text-[11px] text-gray-600">
              Clear itemised estimates, proper ground excavation, no hidden charges, and clean site policy.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#111512] text-white text-xs font-bold hover:bg-black transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d7393e]" />
              <span>Call Matt directly: {COMPANY_INFO.phone}</span>
            </a>
            <button
              type="button"
              onClick={handleReset}
              className="text-xs font-semibold text-gray-500 hover:text-[#111512] underline cursor-pointer py-1"
            >
              Submit Another Project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

