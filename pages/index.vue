<template>
  <section style="width: 100%">
    <full-page>
      <section class="section" style="background: #d8e9f3">
          <nav style="" class="absolute left-0 flex">
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-2 mb-2">
                  <div class="relative flex items-center justify-between h-16">
                  <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <!-- <div class="flex-shrink-0 flex items-center">
                          <h1>Sokhon.dev</h1>
                      </div> -->
                      <img class="block h-20 w-auto" src="sokhonLogo.png" alt="Workflow">
                  </div>
                  </div>
              </div>
          </nav>
          <div class="firstchild">
            <div class="mb-5 mr-2" style="font-family: 'Anton', sans-serif; font-size:36px;">
              <div id="flip" class="content-center">
                  <div><div class="mb-1">{{time[0]}}</div></div>
                  <div><div class="mb-1">{{time[1]}}</div></div>
                  <div><div class="mb-1">{{time[2]}}</div></div>
              </div>
            </div> 
            <div class="word">
              <span>I</span> <!-- 1-->
              <span>'</span> <!-- 2-->
              <span>M</span> <!-- 3-->
              <span>-</span> <!-- 4-->
              <span>S</span> <!-- 5-->
              <span>O</span> <!-- 6-->
              <span>K</span> <!-- 7-->
              <span>H</span> <!-- 8-->
              <span>O</span> <!-- 9-->
              <span>N</span> <!-- 10-->
            </div>
            <div class="vuetyper">
              <p class="text-xl">
                &lt; A
                <vue-typer
                  :text='["Student","Software Developer", "Web Developer"]'
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='70'
                  :pre-erase-delay='2000'
                  :erase-delay='250'
                  erase-style='backspace'
                  :erase-on-complete='false'
                  caret-animation='blink'
                ></vue-typer>
                /&gt;
              </p>
            </div>
          </div>
        <div class="firstchildfooter">
            <!-- <div class="flex sm:justify-center xl:justify-start"> 
              <a href="">fb</a>
              <a href="">ig</a>
              <a href="">lk</a>
            </div> -->
            <div class="flex justify-evenly mt-1">
                <button>
                  <a href="https://www.facebook.com/sokhon.chhun.17/">
                      <img class="w-6 h-6" src="fb.svg" alt="Facebook">
                  </a>
                </button>
                <button>
                  <a href="https://www.instagram.com/sokhon_chhun/">
                      <img class="w-6 h-6" src="ig.svg" alt="Instagram">
                  </a>
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/sokhon-chhun-049717192/">
                      <img class="w-6 h-6" src="lk.svg" alt="LinkedIn">
                  </a>
                </button>
                <button>
                  <a href="https://twitter.com/sokhon_chhun">
                      <img class="w-6 h-6" src="twt.svg" alt="Twitter">
                  </a>
                </button>
                <button>
                  <a href="https://github.com/SokhonC">
                      <img class="w-5 h-5" src="gh.svg" alt="Github">
                  </a>
                </button>
            </div>
            <p class="mt-1">{{currentDate.getFullYear()}} - sokhon_chhun</p>
        </div>
      </section>
      <section class="section" style="background: #C5E4Fe">
        <nav style="" class="absolute left-0">
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-2 mb-2">
                  <div class="relative flex items-center justify-between h-16">
                  <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <!-- <div class="flex-shrink-0 flex items-center">
                          <h1>Sokhon.dev</h1>
                      </div> -->
                      <img class="block h-20 w-auto" src="sokhonLogo.png" alt="Workflow">
                  </div>
                  </div>
              </div>
          </nav>
          <div class="secondchild flex justify-around">
            <div class="p-10 rounded-lg shadow-md" style="background-color: #2D5D83; color: white;">
              <h1 class="text-xl font-bold" style="color:white;">
                <!-- <vue-typer
                  :text='["Who Am I ?"]'
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='70'
                  :pre-erase-delay='2000'
                  :erase-delay='250'
                  erase-style='backspace'
                  :erase-on-complete='false'
                  caret-animation='blink'
                ></vue-typer> -->
                Who Am I?
                </h1>
              <div class="mt-3 mb-3">
                <p class="">I have just over years of experience as a junior software engineer. 
                  In my short time there, I've already contributed to over a dozen projects with some technologies such as <strong>Unity/C#</strong> and <strong>Nodejs</strong>.</p>
              </div>
              <!-- <h3 class="text-xs uppercase">currently working on:</h3>
              <h2 class="tracking-wide">
                Quadusk as
                (Backend Developer)
              </h2> -->
              <div class="bg-gray-400 w-64 mt-0 mb-0 rounded-lg mt-2 overflow-hidden invisible"></div>
              <button class="bg-orange-400 py-3 px-4 mt-4 rounded text-sm font-semibold hover:bg-opacity-75">CV Under Construction</button>
            </div>
            <div class="p-10 rounded-lg shadow-md ml-4 mr-4 h-30" style="background-color: #2D5D83; color: white;">
              <h1 class="text-xl font-bold mb-4">Tech??</h1>
              <exp class=""/>
              <div class="bg-gray-400 w-64 mt-0 mb-0 rounded-lg mt-2 overflow-hidden invisible"></div>
            </div>
            <div class="p-10 rounded-lg shadow-md" style="background-color: #2D5D83; color: white;">
              <h1 class="text-xl font-bold">How's life???</h1>
              <div class="mt-3 mb-6">
                <p class="">University 75% stuck</p>
                <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                  <div class=" w-3/4 h-full rounded-lg shadow-md shim-orange"></div>
                </div>
              </div>
              <h3 class="text-xs uppercase">currently working on:</h3>
              <h2 class="tracking-wide">
                Will update later
              </h2>
              <button class="bg-orange-400 py-3 px-4 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"><a href="https://quadusk.com/en">Dummy button</a></button>
            </div>
          </div>
          <div class="secondchildfooter">
            <!-- <div class="flex sm:justify-center xl:justify-start"> 
              <a href="">fb</a>
              <a href="">ig</a>
              <a href="">lk</a>
            </div> -->
            <div class="flex justify-evenly mt-1">
                <button>
                  <a href="https://www.facebook.com/sokhon.chhun.17/">
                      <img class="w-6 h-6" src="fb.svg" alt="Facebook">
                  </a>
                </button>
                <button>
                  <a href="https://www.instagram.com/sokhon_chhun/">
                      <img class="w-6 h-6" src="ig.svg" alt="Instagram">
                  </a>
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/sokhon-chhun-049717192/">
                      <img class="w-6 h-6" src="lk.svg" alt="LinkedIn">
                  </a>
                </button>
                <button>
                  <a href="https://twitter.com/sokhon_chhun">
                      <img class="w-6 h-6" src="twt.svg" alt="Twitter">
                  </a>
                </button>
                <button>
                  <a href="https://github.com/SokhonC">
                      <img class="w-5 h-5" src="gh.svg" alt="Github">
                  </a>
                </button>
            </div>
            <p class="mt-1">{{currentDate.getFullYear()}} - sokhon_chhun</p>
        </div>
      </section>
      <section class="section" style="background: #2D5D83">
        <nav style="" class="absolute left-0">
              <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-2 mb-2">
                  <div class="relative flex items-center justify-between h-16">
                  <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <!-- <div class="flex-shrink-0 flex items-center">
                          <h1>Sokhon.dev</h1>
                      </div> -->
                      <img class="block h-20 w-auto" src="sokhonLogoWhite.png" alt="Workflow">
                  </div>
                  </div>
              </div>
          </nav>
          <div class="thirdchild">
            <div class="p-10 rounded-lg shadow-md" style="background-color: #C5E4Fe; ">
              <h1 class="text-xl font-bold" style="font-family: 'Parisienne', cursive; font-size: 45px; ">Get in touch</h1>
              <div class="mt-3 mb-3" style="font-family: 'Roboto', sans-serif;">
                <p class="">Please feel free, to drop me a line. If you don't get an answer immediately, I might just be travelling through the middle of nowhere. I'll get back to you <strong>ASAP</strong>.</p>
              </div>
              <div class="bg-gray-400 w-64 mt-0 mb-0 rounded-lg mt-2 overflow-hidden invisible"></div>
              <button class="bg-orange-400 py-3 px-4 mt-4 rounded text-sm font-semibold hover:bg-opacity-75 animate-bounce" style="font-family: 'Kaisei Opti', serif;" ><a href="mailto:sokhonchhun12@gmail.com">Write me an Email</a></button>
            </div>
          </div>

          <div class="thirdchildfooter">
            <!-- <div class="flex sm:justify-center xl:justify-start"> 
              <a href="">fb</a>
              <a href="">ig</a>
              <a href="">lk</a>
            </div> -->
            <div class="flex justify-evenly mt-1">
                  <a href="https://www.facebook.com/sokhon.chhun.17/">
                      <img class="w-6 h-6" src="fbc.svg" alt="Instagram">
                  </a>
                <button>
                  <a href="https://www.instagram.com/sokhon_chhun/">
                      <img class="w-6 h-6" src="igc.svg" alt="Instagram">
                  </a>
                </button>
                <button>
                  <a href="https://www.linkedin.com/in/sokhon-chhun-049717192/">
                      <img class="w-6 h-6" src="inc.svg" alt="LinkedIn">
                  </a>
                </button>
                <button>
                  <a href="https://twitter.com/sokhon_chhun">
                      <img class="w-6 h-6" src="twtc.svg" alt="Twitter">
                  </a>
                </button>
            </div>
            <p class="mt-1" style="color:white;">{{currentDate.getFullYear()}} - sokhon_chhun</p>
        </div>
      </section>
    </full-page>
  </section>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
  data: () => ({
    time: "",
    currentDate: new Date,
    // wordArray : [],
    // currentWord : 0,
    // words: null,
    // user: "Administrator",
  }),

  mounted(){
    //get time 
    const time = new Date().getHours();
    if (time < 12) {
      this.time = ["Morning", "おはよう", "អរុណសួស្តី"];
    } else if (time >= 12 && time < 17) {
      this.time = ["Afternoon", "こんにちは", "ទិវាសួស្ដី"];
    } else {
      this.time = ["Evening", "こんばんは", "សាយ័ណ្ហសួស្ដី"];
    }
    //end get time

    //Letter Animation
      const spans = document.querySelectorAll('.word span');
      spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
          e.target.classList.add('active');
        });
        span.addEventListener('animationend', (e) => {
          e.target.classList.remove('active');
        });
        
        // Initial animation
        setTimeout(() => {
          span.classList.add('active');
        }, 750 * (idx+1))
      });
      //end letter animation 
  },
  components: {
    VueTyper
  },
  methods: {
      
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Anton|Roboto');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:600');
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Rampart+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Parisienne&family=Roboto:wght@100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kaisei+Opti&display=swap');
.vuetyper {
  /* align-items: center; */
  /* justify-content: center; */
  /* background: #FFFF00; */
  position: relative;
  width: 20rem;
  top: 30px;
  left: 50%;
  /* left: ; */
  /* margin: 0 auto; */
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Indie Flower', cursive;
  /* display: flex; */
  text-align: right;
  font-size: 25px;
  transform: translate(-50%, -50%);
  /* color: white; */
}
.shim-orange {
  position: relative;
  overflow: hidden;
  background-color: rgba(246, 173, 84, 0.7);
}
.shim-orange::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(233, 233, 233, 1) 0,
    rgba(233, 233, 233, 0.9) 50%,
    rgba(233, 233, 233, 0.8) 100%
  );
  animation: shimmer 2s ease-out infinite;
  content: "";
}
.section {
  height: 100vh;
  width: 100%;
  /* align-items: center;
  display: flex;
  justify-content: center; */
}
.divsection {
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 15px;
}
.parent {
  height: 100vh;
  width: 100%;
}
.firstchild {
align-items: center;
justify-content: center;
position: absolute;
top: 15%;
left: 50%;
margin: 0 auto;
/* display: flex; */
/* text-align: center; */
transform: translate(-50%, -50%);
}
.firstchildfooter{
  align-items: center;
  justify-content: center;
  /* background: #FFFF00; */
  position: absolute;
  width: 15rem;
  top: 31%;
  left: 50%;
  margin: 0 auto;
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Indie Flower', cursive;
  /* display: flex; */
  text-align: center;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
.secondchildfooter{
  align-items: center;
  justify-content: center;
  /* background: #FFFF00; */
  position: absolute;
  width: 15rem;
  top: 64.5%;
  left: 50%;
  margin: 0 auto;
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Indie Flower', cursive;
  /* display: flex; */
  text-align: center;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
.secondchild {
  /* align-items: center;
  justify-content: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  /* margin: 0 auto; */
  /* display: flex; */
  /* text-align: center; */
transform: translate(-50%, -50%);
}
.thirdchild {
  /* align-items: center;
  justify-content: center; */
  position: absolute;
  top: 83%;
  left: 50%;
  /* margin: 0 auto; */
  /* display: flex; */
  /* text-align: center; */
  transform: translate(-50%, -50%);
}
.thirdchildfooter{
  align-items: center;
  justify-content: center;
  /* background: #FFFF00; */
  position: absolute;
  width: 15rem;
  top: 98%;
  left: 50%;
  margin: 0 auto;
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Indie Flower', cursive;
  /* display: flex; */
  text-align: center;
  font-size: 20px;
  transform: translate(-50%, -50%);
}
/* .center {
margin: auto;
width: 60%;
border: 5px solid #FFFF00;
padding: 10px;
} */
.word {
  /* font-family: 'Lato', sans-serif; */
  font-family: 'Rampart One', cursive;
  /* font-family: 'Indie Flower', cursive; */
  font-size: 10px;
  color: #394750;
  perspective: 1000px; 
}

.word span {
  cursor: pointer;
  display: inline-block;
  font-size: 100px;
  user-select: none;
  line-height: .8;
}

.word span:nth-child(1).active {
  animation: balance 1.5s ease-out;
  transform-origin: bottom left;
}

@keyframes balance {
  0%, 100% {
    transform: rotate(0deg);
  }
  
  30%, 60% {
    transform: rotate(-45deg);
  }
}

.word span:nth-child(2).active {
  animation: shrinkjump 1s ease-in-out;
  transform-origin: bottom center;
}

@keyframes shrinkjump {
  10%, 35% {
    transform: scale(2, .2) translate(0, 0);
  }
  
  45%, 50% {
    transform: scale(1) translate(0, -150px);
  }
  
  80% {
    transform: scale(1) translate(0, 0);
  }
}

.word span:nth-child(3).active {
  animation: falling 2s ease-out;
  transform-origin: bottom center;
}

@keyframes falling {
  12% {
    transform: rotateX(240deg);
  }
  
  24% {
    transform: rotateX(150deg);
  }
  
  36% {
    transform: rotateX(200deg);
  }
  
  48% {
    transform: rotateX(175deg);
  }
  
  60%, 85% {
    transform: rotateX(180deg);
  }
  
  100% {
    transform: rotateX(0deg);
  }
}

.word span:nth-child(4).active {
  animation: rotate 1s ease-out;
}

@keyframes rotate {
  20%, 80% {
    transform: rotateY(180deg);
  }
  
  100% {
    transform: rotateY(360deg);
  }
}

.word span:nth-child(5).active {
  animation: shrinkjump 1s ease-in-out;
  transform-origin: bottom center;
}
.word span:nth-child(6).active {
  animation: rotate 1s ease-out;
}
.word span:nth-child(7).active {
  animation: shrinkjump 1s ease-in-out;
}
.word span:nth-child(8).active {
  animation: toplong 1.5s linear;
}
.word span:nth-child(9).active {
  animation: rotate 1s ease-out;
}
.word span:nth-child(10).active {
  animation: shrinkjump 1s ease-in-out;
}

@keyframes toplong {
  10%, 40% {
    transform: translateY(-48vh) scaleY(1);
  }
  
  90% {
    transform: translateY(-48vh) scaleY(4);
  }
}
@keyframes shimmer {
  100% {
    transform: translateX(0%);
    opacity: 0;
  }
}
/* word carousal */

#container {
  color:#999;
  text-transform: uppercase;
  font-size:36px;
  font-weight:bold;
  padding-top:200px;  
  position:fixed;
  width:100%;
  bottom:45%;
  display:block;
}

#flip {
  height:60px;
  overflow:hidden;
}

#flip > div > div {
  color:#3c6478;
  padding-top:4px;
  height:50px;
  margin-bottom:45px;
  display:inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

@keyframes show {
  0% {margin-top:-270px;}
  5% {margin-top:-180px;}
  33% {margin-top:-180px;}
  38% {margin-top:-90px;}
  66% {margin-top:-90px;}
  71% {margin-top:0px;}
  99.99% {margin-top:0px;}
  100% {margin-top:-270px;}
}

/* Other styles */
body {
  background-color: skyblue;
  color: #fff;
  display: flex;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  margin: 0;
}
</style>
