import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, Calendar, CheckCircle, XCircle, UserRound } from "lucide-react";
import doctorsData from "@/data/doctors.json";
import { useDoctorAvailability } from "@/hooks/use-doctor-availabilty";

export default function DoctorsDirectory() {
  const { t } = useTranslation();

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="glassmorphism rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              {t("doctors-title")}
            </h3>
            <p className="text-xl text-gray-600">{t("doctors-subtitle")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {doctorsData.map((doctor) => {
            const availability = useDoctorAvailability(
              doctor.morningHours,
              doctor.eveningHours,
              doctor.days
            );

            return (
              <Card
                key={doctor.id}
                className="group glassmorphism rounded-3xl shadow-xl overflow-hidden card-hover border border-white/20 backdrop-blur-sm my-4 md:my-6 lg:my-8"
              >
                <div className="relative">
                  <div className="h-85 bg-gray-100 relative overflow-hidden">
                    <img  
                      src={doctor.image}
                      alt={`${doctor.name} - ${doctor.specialty}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    
                    {/* Fallback placeholder - hidden by default */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 hidden">
                      <div className="text-gray-400 text-center">
                        <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-full flex items-center justify-center">
                          <UserRound className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-sm">Doctor Photo</p>
                      </div>
                    </div>
                    
                    {/* Availability overlay */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                        availability.isAvailable 
                          ? 'bg-green-500/90 text-white backdrop-blur-sm' 
                          : 'bg-red-500/90 text-white backdrop-blur-sm'
                      }`}>
                        {availability.isAvailable ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                        {availability.isAvailable ? 'Available' : 'Closed'}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-800 break-words hindi-text text-safe">
                    {doctor.name}
                  </h4>
                  <p className="text-teal-600 font-semibold mb-3 text-base break-words hindi-text text-safe">
                    {doctor.specialty}
                  </p>
                  
                  {/* Availability status */}
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-gray-700 text-sm text-safe">{availability.statusText}</span>
                    </div>
                    <p className="text-xs text-gray-600 text-safe">{availability.nextAvailable}</p>
                  </div>
                  
                  {/* Working hours */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span className="text-safe">Working Days: {doctor.days.join(', ')}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <div className="font-medium text-blue-700 text-xs text-safe">Morning</div>
                        <div className="text-blue-600 text-xs text-safe">{doctor.morningHours}</div>
                      </div>
                      <div className="bg-teal-50 p-2 rounded-lg">
                        <div className="font-medium text-teal-700 text-xs text-safe">Evening</div>
                        <div className="text-teal-600 text-xs text-safe">{doctor.eveningHours}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact information */}
                  <div className="space-y-2">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${doctor.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 group/email"
                    >
                      <Mail className="w-4 h-4 text-purple-600 group-hover/email:text-purple-700" />
                      <span className="text-purple-700 group-hover/email:text-purple-800 font-medium text-sm text-safe">
                        {doctor.email}
                      </span>
                    </a>

                    <a
                      href={`tel:${doctor.mobile}`}
                      className="flex items-center gap-2 p-2 rounded-lg bg-gradient-to-r from-teal-50 to-blue-50 hover:from-teal-100 hover:to-blue-100 transition-all duration-300 group/phone"
                    >
                      <Phone className="w-4 h-4 text-teal-600 group-hover/phone:text-teal-700" />
                      <span className="text-teal-700 group-hover/phone:text-teal-800 font-medium text-sm text-safe">
                        {doctor.mobile}
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
