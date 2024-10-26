import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone, Facebook, Youtube } from 'lucide-react'

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className="bg-pink-500 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Junaid's Portfolio</h1>
        <Button onClick={toggleDarkMode} variant="outline">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </header>

      <main className="container mx-auto p-4">
        <Card className={`mb-8 ${darkMode ? 'bg-gray-800' : 'bg-yellow-300'}`}>
          <CardContent className="flex flex-col md:flex-row items-center p-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/junaid-picture-0001-53q7hQgBd2LZ6W9ilrwIfiTUD2lRJZ.png"
              alt="Junaid Ul Haque Sheikh"
              className="rounded-full w-48 h-48 object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h2 className="text-3xl font-bold mb-2">Hello, I'm Junaid Ul Haque Sheikh</h2>
              <h3 className="text-xl mb-2">Frontend Developer</h3>
              <p className="mb-4">
                I design web applications for my clients and company. If you want to make your website, contact me.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" asChild>
                  <a href="tel:+923359033554"><Phone className="mr-2 h-4 w-4" /> +92 335 9033554</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+923343046525"><Phone className="mr-2 h-4 w-4" /> +92 334 3046525</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={`mb-8 ${darkMode ? 'bg-gray-800' : 'bg-purple-300'}`}>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              As a passionate Frontend Developer, I specialize in creating responsive and user-friendly web applications.
              With a keen eye for design and a strong foundation in modern web technologies, I strive to deliver
              high-quality solutions that meet my clients' needs and exceed their expectations.
            </p>
          </CardContent>
        </Card>

        <Card className={`mb-8 ${darkMode ? 'bg-gray-800' : 'bg-green-300'}`}>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Responsive Web Design</li>
              <li>UI/UX Design Principles</li>
              <li>Version Control (Git)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className={`mb-8 ${darkMode ? 'bg-gray-800' : 'bg-blue-300'}`}>
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Button variant="outline" asChild>
                <a href="https://junaid-s-portfolio-0001.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Portfolio Website
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:junaidulhaquesheikh204@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> junaidulhaquesheikh204@gmail.com
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:junaidulhaquesheikh582@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> junaidulhaquesheikh582@gmail.com
                </a>
              </Button>
              {/* <Button variant="outline" asChild>
                <a href="mailto:junaid@example.com">
                  <Mail className="mr-2 h-4 w-4" /> junaid@example.com
                </a>
              </Button> */}
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/junaid-ul-haque-sheikh-s-o-96ab982b2/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.facebook.com/profile.php?id=61565373333000" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" /> Facebook Profile
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.youtube.com/@JunaidUlHaqueSheikh-uy8jm" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> YouTube Channel
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.tiktok.com/@junaid.ul.haque.s" target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok Profile
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className={`text-center p-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        <p>&copy; 2025 Junaid Ul Haque Sheikh. All rights reserved.</p>
      </footer>
    </div>
  )
}