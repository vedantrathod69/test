"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Calendar } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 mobile-padding bg-card/30 color-shift">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance gradient-text">
            Get In Touch
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mx-auto mb-6 sm:mb-8 hover-glow"></div>
          <p className="text-muted-foreground text-base sm:text-lg text-pretty leading-relaxed px-2 sm:px-0">
            Interested in collaborating on data science projects or discussing emerging technologies? I'd love to hear
            from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="bg-card border-border hover-glow wave-effect hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl text-foreground gradient-text">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 hover:bg-primary/5 p-3 rounded-lg transition-colors duration-300 touch-manipulation">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary float-animation flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-foreground text-sm sm:text-base">Email</p>
                  <p className="text-muted-foreground text-xs sm:text-sm break-all">vedantrathod1910@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-primary/5 p-3 rounded-lg transition-colors duration-300 touch-manipulation">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary float-animation flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Location</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Wardha, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center gap-3 hover:bg-primary/5 p-3 rounded-lg transition-colors duration-300 touch-manipulation">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary float-animation flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm sm:text-base">Date of Birth</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">19 September</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover-glow wave-effect hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="text-lg sm:text-xl text-foreground gradient-text">Let's Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                I'm always excited to discuss new opportunities, collaborate on projects, or share knowledge about data
                science and development. Feel free to reach out!
              </p>
              <Button
                className="w-full wave-effect hover-glow hover:scale-105 transition-all duration-300 min-h-[48px] touch-manipulation"
                size="lg"
                onClick={() => (window.location.href = "mailto:vedantrathod1910@gmail.com")}
              >
                <Mail className="h-4 w-4 mr-2 float-animation" />
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
