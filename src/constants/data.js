import { images } from "."

const headerData = {
    logoImgV1: images.HeaderLogoV1,
    logoImgV2: images.HeaderLogoV2,
    btnText: "Contact us"
  }

  const navData= [
    { 
      name: "About",
       href: "about" 
      },
    { 
      name: "How to", 
      href: "how" 
    },
    { 
      name: "Faqs", 
      href: "faqs" 
    }
  ]

  const heroData= {
    title: "Your awesome traffic permit consultant.",
    sceneImg: images.HeroScene,
    boyImg: images.HeroBoy,
    girlImg: images.HeroGirl,
    truckImg: images.HeroTruck,
    btnText: "Get Started"
  }

  const aboutData = {
    title: "About us",
    subtitle: "The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all.",
    text: "How do you do when you need to obtain a commercial traffic permit for freight transport to your business?",
    boyImg: images.Aboutboy
  }

  const howData = {
    title: "How to apply",
    subtitle: "When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.",
    girlImg: images.HowGirl
  }

  const faqData = {
    pretitle: "faq",
    title: "Questions and Answers on Professional Traffic Permits:",
    boyImg: images.Faqboy,
    accordions: [
      {
        question: "What is a professional traffic permit?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
      },
      {
        question: "How to check the traffic condition?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
      },
      {
        question: "What are the requirements for a professional traffic permit?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
      },
      {
        question: "Are there professional traffic permit training courses at a distance?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
      },
      {
        question: "When is a professional traffic permit needed?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
      },
      {
        question: "Where to look for a traffic permit?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
      },
      {
        question: "Are there differences between a traffic permit and a professional traffic permit?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
      },
      {
        question: "How much does a commercial traffic permit cost for goods?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
      },
      {
        question: "How to plug in for the traffic permit test?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
      },
      {
        question: "How is the sample for a professional traffic permit booked?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
      },
      {
        question: "What is a professional traffic permit?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum. Voluptatem, fugiat?"
      },
      {
        question: "How to check the traffic condition?",
        answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, voluptatum."
      }
    ]
  }

  const testimonialData = {
    pretitle: "testimonials",
    title: "Our Awesome Clients",
    clients: [
      {
        message: "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
        image: images.Avatar1,
        name: "Isak Pettersson"
      },
      {
        message: "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
        image: images.Avatar2,
        name: "Simon Sandberg"
      },
      {
        message: "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
        image: images.Avatar3,
        name: "Melissa Doe"
      },
      {
        message: "Yes, you will need to have the land owner sign the permit application as the Permittee, and you sign the permit as the Applicant or Agent for the Permittee.",
        image: images.Avatar1,
        name: "Isak Pettersson"
      },
      {
        message: "From most barricade or traffic control companies located in the phone book. They employ certified Traffic Control Supervisors (TCS) who can generate and certify the traffic control plan.",
        image: images.Avatar2,
        name: "Simon Sandberg"
      },
      {
        message: "An A-Line, or access restriction deed is a property right that has been obtained by CDOT for the sole purpose of prohibiting direct",
        image: images.Avatar3,
        name: "Melissa Doe"
      }
    ]
  }

  const footerData = {
    truckImg: images.FooterTruck,
    hillImg: images.FooterHill,
    text: "We provide traffic management consultants so you get started quickly, contact us for a quote today!",
    logo: images.FooterLogo,
    links: [
      { name: "about", "href": "about" },
      { name: "how to", "href": "how" },
      { name: "faqs", "href": "faqs" }
    ],
    form: {
      labelName: "Name",
      placeholderName: "Your name",
      labelEmail: "Email address",
      placeholderEmail: "Your email adddress",
      btnText: "Get Started"
    }
  }

const data = {
  headerData,
  footerData,
  heroData,
  testimonialData,
  navData,
  aboutData,
  faqData,
  howData
}

export default data