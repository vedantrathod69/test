export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 mobile-padding color-shift">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-balance gradient-text">
            About Me
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-primary mb-6 sm:mb-8 hover-glow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          <div className="hover-glow wave-effect p-4 sm:p-6 rounded-lg bg-card/50 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 gradient-text">
              Career Objective
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty text-sm sm:text-base">
              Motivated and highly skilled Class 10 student with strong interest in development, data science, and
              emerging technologies. Eager to apply technical knowledge, learn from real-world projects, and contribute
              to innovative teams while continuing to grow skills and experience.
            </p>
          </div>

          <div className="hover-glow wave-effect p-4 sm:p-6 rounded-lg bg-card/50 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 gradient-text">
              Experience & Involvement
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="hover:bg-primary/5 p-3 rounded-lg transition-colors duration-300 touch-manipulation">
                <h4 className="font-medium text-foreground text-sm sm:text-base">Developer Team Member</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Collaborated on coding and development projects, learned version control, problem-solving, and
                  teamwork.
                </p>
              </div>
              <div className="hover:bg-primary/5 p-3 rounded-lg transition-colors duration-300 touch-manipulation">
                <h4 className="font-medium text-foreground text-sm sm:text-base">Cracking Community</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Gained exposure to cybersecurity basics, competitive problem-solving, and peer learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
