---
title: "HELLO"
description: "Responsive cards Study"
category: "category"

---


#URL

baseurl: "" # only for github, gulp baseurl set in config_dev.yml
url: "http://hello.diogorusso.com/my_jekyll_2" # the base hostname & protocol for your site


# Author

author: "Diogo Russo"
job: "experience designer"
title: "Estúdio Berinjela | Criação"
description: "I'm a DESIGNER and STORYTELLER
I help businesses, individuals and communities craft meaningful EXPERIENCES and PRODUCTS"
logo: "lib/imgs/site/logo.png"
favico: "/lib/imgs/site/favicon.ico"
avatar: "/lib/imgs/site/site_card.jpg"
email: hello@diogorusso.com
country: "United States"
region: "California"
city: "Berkeley"



#Social Media

social:
  - name: "behance"
    url: "https://www.behance.net/diogorusso"
  - name: "linkedin"
    url: "https://www.linkedin.com/in/diogorusso/en"
  - name: "envelope-o"
    url: "mailto:contato@estudioberinjela.com.br"



#Menu 

site-structure: multipage # onepage

menu-links_multipage:
  - title: "MULTIPAGE"
    url: "/teste"

menu-links_onepage:
  - title: O Estúdio
    url: "#bio"
  - title: Criação
    url: "#process-steps-bar"
  #- title: Portfolio
    #url: "#work"
    #external: true
  - title: Portfolio
    url: "#work"
    #external: true
  #- title: Portfolio
    #url: "http://work.diogorusso.com"
    #external: true
  - title: Contato
    url: "#connect"
    icon: heart
    icon-color: "f14b4b"




# Hero 

hero-title: "Estúdio Berinjela"
hero-subtitle: "Ajudamos pessoas e negócios a<br> melhor comunicarem suas ideias."

hero-btn-txt: "mais"

hero-key-word-1: "Vídeos e Motion"
hero-key-word-2: "Pautas e Coberturas"
hero-key-word-3: "Design e Ilustração"
hero-key-word-4: "Orientação Criativa"



hero-transtion: "slide"
hero-arrows: true
hero-autoplay: true

hero-bgs-path: "/lib/imgs/site/hero_01_fullpage/img_resp"

hero-bgs:
  - title: "Hello"
    src: "slide_01.jpg"
  - title: "Hello 2"
    src: "slide_01.jpg" 


# Bio

img-bio-path: '/lib/imgs/site/bio/img_resp'
img-bio-max-size: 791
img-bio-breakpoints: [791,480]
img-bio-bg: 'R_bio_bg.jpg'
img-profile: 'R_profile.jpg'
img-card: 'R_card.jpg'


txt-bio-bg: "ccc"
txt-bio: 'Aqui designers, FILMAKERS, FOTÓGRAFOS, ILUSTRADORES, ARTISTAS e entusiastas trabalham de maneira colaborativa, com dedicação, para transformar IDEIAS em RESULTADOS.'
txt-bio-2: 'Entre os diversos trabalhos realizados destacam-se vídeos institucionais, coberturas audiovisuais, identidade visual, curadoria e produção artística.'

bio-btn-txt:  "Perfil Completo"
bio-btn-link:  "https://www.linkedin.com/in/diogorusso/en"


skills: 
  - title: "1 Idéia"
    icon: '/lib/imgs/site/bio/skill_01_experience.png'
  - title: "2 Proposta"
    icon: "/lib/imgs/site/bio/skill_02_direction.png"
  - title: "3 Criação"
    icon: "/lib/imgs/site/bio/skill_03_web.png"
  - title: "4 Fim"
    icon: "/lib/imgs/site/bio/skill_04_graphics.png"


# Process

section-process-url: "process"
img-process-path: "lib/imgs/site/process_steps/"


process-steps:
  - title: "Vídeo <br>& Motion"
    id: 1
    color: 50E3C2
    link: ""
    icon: "/lib/imgs/site/process_steps/step_0_creativity_icon.png"
    icon-bg: "000"
    img: "step_0_creativity_img.jpg" 
    description: "I use design thinking and creative problem solving methods to help business, individuals and communities to explore and embrace new ideas."
  - title: "Pautas &<br> Coberturas"
    id: 2
    color: F8E71C
    link: "experience"
    icon: "/lib/imgs/site/process_steps/step_1_experience_icon.png"
    icon-bg: "000"
    img: "step_1_experience_img.jpg" 
    description: "I conduct interviews, workshops and research projects with internal and external stakeholders."
  - title: "Experiências <br>Web"
    id: 3
    color: BD71FF
    link: "document"
    icon: "/lib/imgs/site/process_steps/step_2_document_icon.png"
    icon-bg: "000"
    img: "step_2_document_img.jpg" 
    description: "I create detailed and delightful infographics, presentations, e-books, prints and illustrations"
  - title: "Design Gráfico <br> & Ilustração"
    id: 4
    color: 4A90E2
    link: "prototype"
    icon: "/lib/imgs/site/process_steps/step_3_prototype_icon.png"
    icon-bg: "000"
    img: "step_3_prototype_img.jpg" 
    description: "I create prototypes, experiments and iterations to refine ideas through continuous feedback loops."
  - title: "Oficinas<br> & Eventos"
    id: 5
    color: F5A623
    link: "design"
    icon: "/lib/imgs/site/process_steps/step_4_design_icon.png"
    icon-bg: "000"
    img: "step_4_design_img.jpg" 
    description: "I design meaningful experiences, products and graphics for business, individuals and communities."
  - title: "Connect<br> & Inspire"
    id: 6
    color: f14b4b
    link: "work"
    icon: "/lib/imgs/site/process_steps/step_5_connect_icon.png"
    icon-bg: "000"
    img: "step_4_design_img.jpg" 
    description: "I use design thinking and creative problem solving methods to help business, individuals and communities to explore and embrace new ideas."


# work

section-work-title: "Portfolio"

work-call-to-action-btns:
  - title: "Experience & Product"
    link: "#"
    bg-color: "#f7f7f7"
  - title: "Creative Direction"
    link: "#"
    bg-color: "#ecebeb"
  - title: "Web & Graphics"
    link: "#"
    bg-color: "#e4e4e4"
  - title: "Illustration & Art"
    link: "#"
    bg-color: "#dcdcdc"
  - title: "All My Projects"
    link: "#"
    bg-color: "#cccccc"
  - title: "Tools & Methods"
    link: "#"
    bg-color: "#c7c7c7"





featured-path: "/lib/imgs/site/grid_featured/img_resp"
projects-featured:
  - cover: "launchpad.jpg"
    title: "LaunchPad UX"
    fields: "UI/UX, Product Design"
    url: "http://work.diogorusso.com/launchpad"
  - cover: "Coca-Cola_FWC_14.jpg"
    title: "World Cup Brazil"
    fields: "Creative Direction, Film, Photography"
    url: "http://work.diogorusso.com/fwc-2014-conteudo-multimidia-cobertura-coca-cola"
  - cover: "Kenner_Music_case.jpg"
    title: "Kenner IxD & Video"
    fields: "Creative Direction, Interaction Design"
    url: "http://work.diogorusso.com/kenner-ixd-motion"
  - cover: "foodtopia.jpg"
    title: "FOODTOPIA xD"
    fields: "Entrepreneurship, Product Design"
    url: "http://work.diogorusso.com/foodtopia"
  - cover: "website.jpg"
    title: "Wordpress for Startups"
    fields: "UI/UX, Web Design"
    url: "http://work.diogorusso.com/webdesign-for-business"
  - cover: "escola_Sesc.jpg"
    title: "SESC School ID"
    fields: "Branding, Graphic Design"
    url: "http://work.diogorusso.com/escola-sesc-id"



#Google analytics
g-analytics: UA-59944728-3


#Facebook config
fb-app-id: "915671155245552"

see-also:
    - "http://work.diogorusso.com"
    - "http://www.lucaszappa.com.br"
    - "http://www.estudioberinjela.com.br"



# Build settings - PRODUCTION
markdown: kramdown
gems: [jekyll-paginate,jekyll-sitemap]
exclude: [/gulp, /node_modules,gulpfile.js,_assets,bower.json,Gemfile ,Gemfile.lock,package.json]




# INDEX Pagination

paginate: 12
permalink: "/work/:title/"
paginate_home: "/work"
paginate_link: "/work/page"
paginate_path: "/work/page:num"
