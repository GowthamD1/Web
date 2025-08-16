import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
 import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,youtube,twitter,mail,github,linkedin} from './images/images.js';


const Home = () =>{

    const slides=[{url : image1}];
    console.log(slides)

    useGSAP(()=>{
        const divs = document.querySelector(".divs")
        const div1 = document.querySelector(".div1")
        const div2 = document.querySelector(".div2")
        const div3 = document.querySelector(".div3")
        const div4 = document.querySelector(".div4")
        
       divs.addEventListener("mouseenter",()=>{
        gsap.to(div1,{
            x:140,
            boxShadow: '0px 3px 3px 0px rgba(81,186,255,0.7)',
            duration: 0.7,
            ease:'power1.out'

        })

        gsap.to(div2,{
            x:100,
            boxShadow: '0px 3px 3px 0px rgba(81,186,255,0.7)',
            duration: 0.7,
            ease:'power1.out'
        })
        gsap.to(div3,{
            x:-140,
            boxShadow: '0px 3px 3px 0px rgba(81,186,255,0.7)',
            duration: 0.7,
            ease:'power1.out'
        })
        gsap.to(div4,{
            x:-100,
            boxShadow: '0px 3px 3px 0px rgba(81,186,255,0.7)',
            duration: 0.7,
            ease:'power1.out'
        })
       })

       divs.addEventListener("mouseleave",()=>{
        gsap.to(div1,{
            x:-50,
            boxShadow:'0px 3px 3px 0px rgba(81,186,255,0.1)',
            duartion:1.7,
            ease:'power1.out'
        })
        gsap.to(div2,{
            x:-30,
            boxShadow:'0px 3px 3px 0px rgba(81,186,255,0.1)',
            duartion:1.7,
            yoyo:true,
            ease:'power1.out'
        })
        gsap.to(div3,{
            x:50,
            boxShadow:'0px 3px 3px 0px rgba(81,186,255,0.1)',
            duartion:1.7,
            yoyo:true,
            ease:'power1.out'
        })
        gsap.to(div4,{
            x:30,
            boxShadow:'0px 3px 3px 0px rgba(81,186,255,0.1)',
            duartion:1.7,
            yoyo:true,
            ease:'power1.out'
        })
       })

       const image1Div = document.querySelector(".image1-div")
       const image1 = document.querySelector(".image1-image")
        const image2Div = document.querySelector(".image2-div")
       const image2 = document.querySelector(".image2-image")
        const image3Div = document.querySelector(".image3-div")
       const image3 = document.querySelector(".image3-image")
        const image4Div = document.querySelector(".image4-div")
       const image4 = document.querySelector(".image4-image")
        const image5Div = document.querySelector(".image5-div")
       const image5 = document.querySelector(".image5-image")
        const image6Div = document.querySelector(".image6-div")
       const image6 = document.querySelector(".image6-image")

       image1Div.addEventListener("mouseenter",()=>{
        gsap.to(image1Div,{
            scale : 1.05,
            duration:0.5,
        })
        gsap.to(image1,{
            scale:0.9,
            duration:0.5,
        })
       })

       image2Div.addEventListener("mouseenter",()=>{
        gsap.to(image2Div,{
            scale : 1.05,
            duration:0.5,
        })
        gsap.to(image2,{
            scale:0.9,
            duration:0.5,
        })
       })

       image3Div.addEventListener("mouseenter",()=>{
        gsap.to(image3Div,{
            scale : 1.05,
            duration:0.5,
        })
        gsap.to(image3,{
            scale:0.9,
            duration:0.5,
        })
       })
       image4Div.addEventListener("mouseenter",()=>{
        gsap.to(image4Div,{
            scale : 1.05,
            duration:0.5,
        })
        gsap.to(image4,{
            scale:0.9,
            duration:0.5,
        })
       })
       image5Div.addEventListener("mouseenter",()=>{
        gsap.to(image5Div,{
            scale : 1.05,
            duration:0.5,
        })
        gsap.to(image5,{
            scale:0.9,
            duration:0.5,
        })
       })
       image6Div.addEventListener("mouseenter",()=>{
        gsap.to(image6Div,{
            scale : 1.05,
            duration:0.5,
        })
        gsap.to(image6,{
            scale:0.9,
            duration:0.5,
        })
       })

        image1Div.addEventListener("mouseleave",()=>{
        gsap.to(image1Div,{
            scale : 1,
            duration:0.5,
        })
        gsap.to(image1,{
            scale:1,
            duration:0.5,
        })
       })

       image2Div.addEventListener("mouseleave",()=>{
        gsap.to(image2Div,{
            scale : 1,
            duration:0.5,
        })
        gsap.to(image2,{
            scale:1,
            duration:0.5,
        })
       })

       image3Div.addEventListener("mouseleave",()=>{
        gsap.to(image3Div,{
            scale : 1,
            duration:0.5,
        })
        gsap.to(image3,{
            scale:1,
            duration:0.5,
        })
       })
       image4Div.addEventListener("mouseleave",()=>{
        gsap.to(image4Div,{
            scale : 1,
            duration:0.5,
        })
        gsap.to(image4,{
            scale:1,
            duration:0.5,
        })
       })
       image5Div.addEventListener("mouseleave",()=>{
        gsap.to(image5Div,{
            scale : 1,
            duration:0.5,
        })
        gsap.to(image5,{
            scale:1,
            duration:0.5,
        })
       })
       image6Div.addEventListener("mouseleave",()=>{
        gsap.to(image6Div,{
            scale : 1,
            duration:0.5,
        })
        gsap.to(image6,{
            scale:1,
            duration:0.5,
        })
       })
       const img1 = document.querySelector(".img1");
       const img2 = document.querySelector(".img2");
       const img3 = document.querySelector(".img3");
       const img4 = document.querySelector(".img4");
       const img5 = document.querySelector(".img5");

       gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(img1,{x:0,opacity:0},{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:img1,
                start: 'top 83%',
                end :'50% 50%',
            duration:0.7,
            }
       })

       gsap.fromTo(img2,{x:30,opacity:0},{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:img2,
                start: 'top 83%',
                end :'50% 50%',
            duration:0.7,
           
            }
       })

       gsap.fromTo(img3,{x:-30,opacity:0},{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:img3,
                start: 'top 83%',
                end :'50% 50%',
            duration:0.7,
           
            }
       })

       gsap.fromTo(img4,{x:30,opacity:0},{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:img4,
                start: 'top 77%',
                end :'50% 50%',
            duration:0.7,
           
            }
       })
       
       gsap.fromTo(img5,{x:-30,opacity:0},{
            x:0,
            opacity:1,
            scrollTrigger:{
                trigger:img5,
                start: 'top 77%',
                end :'50% 50%',
            duration:0.7,
           
            }
       })
    })
    return(
        <div className="bg-bgColor w-vw h-[100vh]">
            <header className="App-header w-full h-24">
                <nav className='flex justify-between pt-7 container mx-auto'>
                <div className="geist text-white pt-2">
                    <p>Js Mastery!!!</p>
                </div>
                <div className="">
                    <ul className='flex gap-9'>
                    <li className='text-blue-100 geist pt-2'>All Courses</li>
                    <li className='text-blue-100 geist pt-2'>Learning Path</li>
                    <li className='text-black geist-medium'><button className='w-48 h-10 bg-blue-400 rounded-lg p-3 flex justify-center items-center' type="Submit">Login to your account</button></li>
                    </ul>
                </div>
                </nav>
            </header>
            <main>
                <div className="flex flex-col justify-center items-center">
                    <p className="geist-large text-white">Go From</p>
                    <p className="geist-large mb-3"><span className="text-orange-400">I Know This</span> <span className="text-white">to</span> <span className="text-green-400">I Built This</span></p>
                    <p className="text-blue-100 geist-extramedium ">Stop consuming. Start creating. Build real projects that get you hired.</p>
                </div>
                <div className="h-[100vh] img relative">
                    <div className="divs  h-[100vh]">
                        <div className="width-height h-56 rounded-lg absolute top-10 left-20 margin-left-div margin-top-div p-9 flex justify-center items-center text-white div1 color1">
                            <p className="font-size">I've watched all JSM's YouTube videos, but what's available on here is just next level. It's clearer, deeper, and actually helps me build things that matter.</p>
                        </div>
                        <div className="width-height h-56 rounded-lg absolute mt-10 bottom-0 margin-left margin-top p-9  flex justify-center items-center text-white div2 color1">
                            <p className="font-size">I've watched all JSM's YouTube videos, but what's available on here is just next level. It's clearer, deeper, and actually helps me build things that matter.</p>
                        </div>
                        <div className="width-height h-56 rounded-lg absolute top-10 right-20 margin-right-div margin-left-div margin-top-div p-9 color1 flex justify-center items-center text-white div3">
                            <p className="font-size">I've watched all JSM's YouTube videos, but what's available on here is just next level. It's clearer, deeper, and actually helps me build things that matter.</p>
                        </div>
                        <div className="width-height h-56 rounded-lg absolute mt-10 bottom-0 margin-right-div1 right-20 margin-left margin-top p-9  color1 flex justify-center items-center text-white div4">
                            <p className="font-size">I've watched all JSM's YouTube videos, but what's available on here is just next level. It's clearer, deeper, and actually helps me build things that matter.</p>
                        </div>
                    </div> 
                </div>
                <div className="w-vw h-vh bg-bgColor">
                    <div className="">
                        <p className="geist-large text-white flex justify-center items-center pt-24">Stop Watching. Start Building.</p>
                        <p className=" text-blue-100 flex justify-center items-center geist-sm">Full stack courses focused on outcomes, not watch time.</p>
                    </div>
                    <div className="flex">
                        <div className="h-96 width-box color1 rounded-3xl  margin-left-box image1-div">
                            <img className="img-gsap ml-5 mt-7 image1-image" src={image1} alt="1"></img>
                            <p className="geist-Medium mt-2 ml-7 mb-3 text-white">Become a Top 1% GSAP Developer</p>
                            <p className="geist-Small  mt-2 ml-7 text-blue-100">Build GTA VI, explore real design case studies, and learn how to animate like Apple, Stripe, and Duolingo.</p>
                            <button className="geist-SmallButton mt-3 ml-7 text-blue-400" type="Submit">Check it now</button>
                        </div>
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box1 image2-div">
                            <img className="img-gsap ml-5 mt-7 image2-image" src={image2} alt="1"></img>
                            <p className="geist-Medium mt-2 ml-7 mb-3 text-white">Become a Top 1% Next.js 15 Developer in Only One Course</p>
                            <p className="geist-Small ml-7 text-blue-100">Escape the shallow content & dive deep into the hottest tech of 2025.</p>
                            <button className="geist-SmallButton mt-3 ml-7 text-blue-400" type="Submit">Check it now</button>
                        </div>
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box2 image3-div">
                            <img className="img-gsap ml-5 mt-7 image3-image" src={image3} alt="1"></img>
                            <p className="geist-Medium mt-2 ml-7 mb-3 text-white">Vanilla Three.js Course</p>
                            <p className="geist-Small ml-7 text-blue-100">JavaScript-based WebGL engine that can run GPU-powered games and other graphics-powered apps straight from the browser.</p>
                            <button className="geist-SmallButton mt-3 ml-7 text-blue-400" type="Submit">Check it now</button>
                        </div>
                    </div>
                </div>
                <div className=" bg-bgColor h-vh">
                    <div className="flex">
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box3 image4-div">
                            <img className="img-gsap ml-5 mt-7 image4-image" src={image4} alt="1"></img>
                            <p className="geist-Medium mt-2 ml-7 mb-3 text-white">Build & Launch Your SaaS in Under 7 Days</p>
                            <p className="geist-Small ml-7 text-blue-100">A complete masterclass for quickly designing, developing, deploying, and monetizing.</p>
                            <button className="geist-SmallButton mt-3 ml-7 text-blue-400" type="Submit">Check it now</button>
                        </div>
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box4 image5-div">
                            <img className="img-gsap ml-5 mt-7 image5-image" src={image5} alt="1"></img>
                            <p className="geist-Medium mt-2 ml-7 mb-3 text-white">Database Mastery :  SQL to Prisma</p>
                            <p className="geist-Small ml-7 text-blue-100">Unlock the power of databases by mastering core SQL concepts.</p>
                            <button className="geist-SmallButton mt-3 ml-7 text-blue-400" type="Submit">Check it now</button>
                        </div>
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box4 image6-div">
                            <img className="img-gsap ml-5 mt-7 image6-image" src={image6} alt="1"></img>
                            <p className="geist-Medium mt-2 ml-7 mb-3 text-white">Complete Path to JavaScript Mastery</p>
                            <p className="geist-Small ml-7 text-blue-100">Master JavaScript, the language of the web! Learn variables, data types, functions, DOM, ES6+.</p>
                            <button className="geist-SmallButton mt-3 ml-7 text-blue-400" type="Submit">Check it now</button>
                        </div>
                    </div>
                </div> 
                <div className="h-[100vh] bg-bgColor">
                   <div className="flex flex-col items-center pt-24">
                     <p className="text-white geist-large">Join the <span className="text-blue-300">Pro Circle</span></p>
                    <p className="geist-extraSmall text-blue-100 mt-3">Get full access to premium content, pro-level learning paths, and</p>
                    <p className="geist-extraSmall text-blue-100">everything you need to level up as a developer.</p>
                   </div>
                   <div className="flex">
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue1 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow1" src={image7} alt="1"></img>
                        </div>
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue3 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow2" src={image8} alt="1"></img>
                        </div>
                       <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue3 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow3" src={image9} alt="1"></img>
                        </div>
                    </div>
                    <div className="flex bg-bgColor">
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue1 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow4" src={image10} alt="1"></img>
                        </div>
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue3 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow5" src={image11} alt="1"></img>
                        </div>
                       <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue3 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow6" src={image12} alt="1"></img>
                        </div>
                    </div>
                    <div className="flex h-[60vh] bg-bgColor">
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue1 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow4" src={image13} alt="1"></img>
                        </div>
                        <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue3 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow5" src={image14} alt="1"></img>
                        </div>
                       <div className="h-96 width-box color1 rounded-3xl margin-left-box-blue3 image4-div flex flex-col items-center">
                            <p className="geist-Medium  text-white text-center mt-14">Build Production-Grade Projects with Best Practices</p>
                            <img className="glow6" src={image15} alt="1"></img>
                        </div>
                    </div>
                   <div className="flex h-[100vh] bg-bgColor flex-col items-center">
                        <p className="text-white geist-textMedium"><span className="text-yellow-200">Wait...</span> I get all of those premium features and full access to all the courses?</p>
                        <p className="geist-textMedium mt-3"><span className="text-white">Yep.</span><span className="text-blue-300">You Get It All + Every Course.</span></p>
                         <div className="border-box7 color1 flex justify-center items-center img1 opacity-0">
                                <img className="imageWidth" src={image2} alt="1"></img>
                            </div>
                            <div className="border-box1 color1 flex justify-center items-center img2">
                                <img className="imageWidth" src={image6} alt="1"></img>
                            </div>
                            <div className="border-box2 color1 flex justify-center items-center img3">
                                <img className="imageWidth" src={image5} alt="1"></img>
                            </div>
                            <div className="border-box3 color1 flex justify-center items-center img4">
                                <img className="imageWidth" src={image1} alt="1"></img>
                            </div>
                             <div className="border-box4 color1 flex justify-center items-center img5">
                                <img className="imageWidth" src={image3} alt="1"></img>
                            </div>
                        <div className=" width-box1 color1 rounded-3xl margin-left-box-blue7  flex flex-col items-center z-7 justify-center">
                            <p className="text-center text-white geist-smlarge p-7">Become a Top 1% Developer in Only One Course</p>
                            <p className="text-center text-blue-100 geist-sm mt-14">Escape the shallow content & dive deep into the hottest tech of 2025.</p>
                        </div>
                    </div>
                    <footer className="h-[12vh] w-full bg-bgColor flex justify-around  text-blue-100">
                        <div className="flex justify-around w-full h-full">
                            <div className=" color3 w-full h-full">
                            <p className=" geist-md margin-top ml-40">&copy;Copyright 2025 Pro</p>
                        </div>
                        <div className=" color3 w-full h-full">
                            <p className=" geist-md margin-top ml-14 flex justify-center items-center gap-3">
                                <button><img src={youtube} alt="1" width="24px" height="24px"></img></button>
                                <button><img src={twitter} alt="1" width="24px" height="24px"></img></button>
                                <button><img src={mail} alt="1" width="24px" height="24px"></img></button>
                                <button><img src={github} alt="1" width="24px" height="24px"></img></button>
                                <button><img src={linkedin} alt="1" width="24px" height="24px"></img></button>
                            </p>
                        </div>
                        <div className=" color3 w-full h-full flex">
                            <p className=" geist-md margin-top ml-60">Blog</p>
                            <p className=" geist-md margin-top ml-12">Terms</p>
                        </div>
                        </div>
                        
                    </footer>
                </div>    
            </main>
        </div>
    )
}


export default Home;