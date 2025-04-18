import CIcon from '../assets/c.svg'
import JavaIcon from '../assets/java.svg'
import PythonIcon from '../assets/python.svg'
import HtmlIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import JsIcon from '../assets/javascript.svg'
import VsCodeIcon from '../assets/vscode.svg'
import EclipseIcon from '../assets/eclipse.svg'
import JupyterIcon from '../assets/jupyter.svg'
import PostmanIcon from '../assets/postman.svg'
import LinuxIcon from '../assets/linux.svg'
import GithubIcon from '../assets/git.svg'
import WordpressIcon from '../assets/wordpress.svg'
import ReactIcon from '../assets/reac.svg'
import MysqlIcon from '../assets/mysql.svg'
import MongodbIcon from '../assets/mongodb.svg'
import SkillsIllustration from "../assets/skills-illustration.gif"
import BashIcon from "../assets/bash.svg"

const skills = [
  { name: 'C', icon: CIcon },
  { name: 'Java', icon: JavaIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'HTML', icon: HtmlIcon },
  { name: 'CSS', icon: CssIcon },
  { name: 'JavaScript', icon: JsIcon },
  { name: 'BASH', icon: BashIcon },
]

const tools = [
  { name: 'VS Code', icon: VsCodeIcon },
  { name: 'Eclipse', icon: EclipseIcon },
  { name: 'Jupyter Notebook', icon: JupyterIcon },
  { name: 'Postman API', icon: PostmanIcon },
]

const frameworks = [
  { name: 'Linux', icon: LinuxIcon },
  { name: 'GitHub', icon: GithubIcon },
  { name: 'WordPress', icon: WordpressIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Bash Scripting', icon: HtmlIcon },
]

const databases = [
  { name: 'MySQL', icon: MysqlIcon },
  { name: 'MongoDB', icon: MongodbIcon },
]

const SkillsSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center p-10 space-y-10 lg:space-y-0 lg:space-x-10 text-white">
      {/* Left: Skills List */}
      <div className="w-full lg:w-2/3">
      <h2 className="text-4xl font-bold bg-white from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 tracking-wide border-b-4 border-indigo-500 pb-2">
        Technical Skills
      </h2>
        
        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-2xl mb-2 text-slate-200">Languages</h3>
          <div className="flex flex-wrap gap-6">
            {skills.map(skill => (
              <div key={skill.name} className="flex flex-col items-center">
                <img src={skill.icon} alt={skill.name} width={40} height={40} className="mb-2"/>
                <span className="text-slate-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="mb-8">
          <h3 className="text-2xl mb-2 text-slate-200">Developer Tools</h3>
          <div className="flex flex-wrap gap-6">
            {tools.map(tool => (
              <div key={tool.name} className="flex flex-col items-center">
                <img src={tool.icon} alt={tool.name} width={40} height={40} className="mb-2"/>
                <span className="text-slate-300">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Technologies */}
        <div className="mb-8">
          <h3 className="text-2xl mb-2 text-slate-200">Technologies / Frameworks</h3>
          <div className="flex flex-wrap gap-6">
            {frameworks.map(framework => (
              <div key={framework.name} className="flex flex-col items-center">
                <img src={framework.icon} alt={framework.name} width={40} height={40} className="mb-2"/>
                <span className="text-slate-300">{framework.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-2xl mb-2 text-slate-200">Databases</h3>
          <div className="flex flex-wrap gap-6">
            {databases.map(db => (
              <div key={db.name} className="flex flex-col items-center">
                <img src={db.icon} alt={db.name} width={40} height={40} className="mb-2"/>
                <span className="text-slate-300">{db.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Skills Illustration or Graphic */}
      <div className="w-full lg:w-1/3 flex flex-col items-center">
        <img
          src={SkillsIllustration}
          alt="Skills Illustration"
          width={500}
          height={500}
          className="rounded-2xl border-8 border-white"
        />
        <p className="mt-6 text-slate-400 text-center">
          Continuously learning and adapting to new technologies in cybersecurity, programming, and web development.
        </p>
      </div>
    </section>
  )
}

export default SkillsSection
