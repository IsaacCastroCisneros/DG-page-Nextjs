import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        curDi: "#ffb300",
        rojo: "#ff1b1b",
        borderGrey: "#bec3ca",
        fieldGrey: "#f4f6fa",
        borderGrey1: "#e5e7eb",
        primary: "#2a50e8",
        myBlue: "#0d6efd",
        myBlueDark: "#055ddf",
        darkBlueBg:"#000b4e",
        myLightBlue1:"#3059c9",
        primaryDark:"#000b4e",
/*         myBlue:"#1e40af", */
        myDarkPurple:"#1900a2",
        myPurple:"#250da7",
        myPurple2:"#2000d1",
        myLightPurple:"#321cac",
        myGrey:"#c2c8f9",
        myLightBlue:"#0d6efd",
        shadow:"#a6a5a2",
        myRealBlue:"#0d6efd",
        myBlue1:"#0017eb"
      },
      screens: {
        "nav-bar": { max: "1267px" },
        "program-selector": { max: "859px" },
        "beneficios": { max: "900px" },
        "beneficios1": { max: "552px" },
        "firstBanner": { max: "1350px" },
        "firstBanner1": { max: "1261px" },
        "secondBanner": { max: "750px" },
        "mob-last": { max: "376px" },
        "mob-first": { max: "500px" },
        "videoMain": { max: "690px" },
        "certificacionIso": { max: "639px" },
        "videoMain2": { max: "427px" },
        "estamosEnLinea": { max: "1257px" },
        "estamosEnLinea2": { max: "1060px" },
        "estamosEnLinea3": { max: "386px" },
        "inHouseBanner": { max: "1239px" },
        "inHouseBanner2": { max: "431px" },
        "listaDeProgramas": { max: "999px" },
        "listaDeProgramas1": { max: "500px" },
        "myButtons": { max: "655px" },
        "370px":{max:"370px"},
        "400px":{max:"400px"},
        "800px":{max:"800px"},
        "1000px":{max:"1000px"},
        "1370px":{max:"1370px"},
        "1500px":{max:"1500px"},
        "soliciteUna": { max: "1285px" },
        "soliciteUna1": { max: "723px" },
        "mob": { max: "500px" },
        "másde14,000alumnoscapacitados": { max: "853px" },
        "popUp":{max:"1211px"},
        "flexContainer":{max:"611px"},
        "contactenosBanner":{max:"1048px"},
        "nosotros":{max:"729px"},
        "garantia":{max:"708px"},
        "dondeEstamos":{max:"541px"},
        "login":{max:"1076px"},
        'question1':{'max':'1231px'},
        'question2':{'max':'1200px'},
        'question3':{'max':'1168px'},
        'question4':{'max':'1134px'},
        'question5':{'max':'1079px'},
        'question6':{'max':'925px'},
        'question7':{'max':'435px'},
        'question8':{'max':'413px'},
      },
    },
  },
  plugins: [],
}
export default config
