<template>
    <section data-scroll-section :class="scrolled ? 'scroll' : ''">
        <div class="container" data-scroll data-scroll-speed="1">
            <div class="row">
                <div class="menu-icon">
                    <span class="fas fa-bars" @click="openMenuBtn();"></span>
                </div>
                <div class="logo">
                    <router-link to="/" tag="span" style="cursor: pointer">
                        <img
                            src="@/assets/img/logo.svg"
                            width="145"
                            height="40"
                            alt="Buffinance"
                        />
                    </router-link>
                </div>
                <div class="nav-items">
                    <li class="navLink">
                        <a href="#" class="trainerBtn">Solutions</a>
                        <a href="#" class="trainerBtn">Why us ?</a>
                        <a href="#" class="trainerBtn">Resources</a>
                        <a href="#" class="trainerBtn">Pricing</a>
                    </li>
                    <li><a href="#" class="loginBtn">Sign Up</a></li>
                </div>
                <div class="search-icon" @click="searchBtn();">
                    <span class="fas fa-search"></span>
                </div>
                <div class="cancel-icon" @click="cancelMenuBtn();">
                    <span class="fas fa-times"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "@/assets/css/main.css";

export default {
    name: "Nav",
    data() {
        return {
            menuItems: [
                { icon: "", title: "Home", to: "/" }, 
            ],
            scrolled: false
        };
    },
    methods: {
        openMenuBtn(){
            const menuBtn = document.querySelector(".menu-icon span");
            const searchBtn = document.querySelector(".search-icon");
            const cancelBtn = document.querySelector(".cancel-icon");
            const items = document.querySelector(".nav-items");
            items.classList.add("active");
            menuBtn.classList.add("hide");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
        },
        cancelMenuBtn(){
            const menuBtn = document.querySelector(".menu-icon span");
            const searchBtn = document.querySelector(".search-icon");
            const cancelBtn = document.querySelector(".cancel-icon");
            const items = document.querySelector(".nav-items");
            const form = document.querySelector("form");
            items.classList.remove("active");
            menuBtn.classList.remove("hide");
            searchBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
            form.classList.remove("active");
            cancelBtn.style.color = "rgb(34, 34, 34)";
        },
        searchBtn(){
            const form = document.querySelector("form");
            const searchBtn = document.querySelector(".search-icon");
            const cancelBtn = document.querySelector(".cancel-icon");
            form.classList.add("active");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("hide");
        },
        scrollToTargetAdjusted(){
            var element = document.getElementById('ccf');
            var headerOffset = 70;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            }); 
        },
        onSideNav() {
            this.$store.dispatch("sideNavChanged");
        },
        handleScroll () {
            this.scrolled = window.scrollY > 0;
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<style scoped>
.scroll {
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.2);
}
.pad-12{
    padding: 12px;
}
.search-icon{
    display: none !important;
}
section{
    background: transparent;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    position: sticky;
    top: 0;
    left:0;
    right: 0;
    z-index: 100;
    padding-top: 55px;
}
section .logo img{
    max-width: 180px;
}
section .nav-items{
    display: flex;
    flex: 1;
    padding: 0 0 0 40px;
    justify-content: flex-end;
    align-items: center;
}
section .nav-items li{
    list-style: none;
    /*padding: 0 15px;*/
}
section .nav-items li a{
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
}
section .nav-items .navLink{
    text-align: center;
    /* justify-content: flex-start; */
    display: flex;
    justify-content: space-around;
    padding: 0 80px;
    flex: auto;
}
section .nav-items .navLink .trainerBtn{
    color: rgba(0, 0, 0, 0.87);
}
section .nav-items .loginBtn{
    color: #000;
    margin-right: 15px;
    font-weight: bold;
}
section .nav-items .partenaireBtn{
    color: #fff;
    background: #E91E24;
    padding: 10px 20px;
    border-radius: 8px;
}
section form{
    display: flex;
    height: 40px;
    padding: 2px;
    background: transparent;
    min-width: 18%!important;
    border-radius: 2px;
    border: none;
    margin-left: 30px !important;
}
section form .search-data{
    width: 60%;
    height: 100%;
    padding: 0 10px;
    color: rgb(34, 34, 34);
    font-size: 17px;
    border: none;
    font-weight: 500;
    background: none;
}
section form .search-data:focus{
    border: none !important;
}
section form button{
    padding: 0 15px;
    color: #777;
    font-size: 17px;
    background: transparent;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    margin-top: -2px !important;
}
section .menu-icon,
section .cancel-icon,
section .search-icon{
    width: 40px;
    text-align: center;
    margin: 0 50px;
    font-size: 18px;
    color: rgb(34, 34, 34);
    cursor: pointer;
    display: none;
}
section .menu-icon span,
section .cancel-icon,
section .search-icon{
    display: none;
}
@media (max-width: 1245px) {
    section{
        padding: 0 50px;
    }
}
@media (max-width: 1140px){
    section{
        padding: 0px;
    }
    section .logo{
        flex: 2;
        text-align: center;
    }
    section .nav-items{
        position: fixed;
        z-index: 99;
        top: 70px;
        width: 100%;
        left: -100%;
        height: 100%;
        padding: 10px 50px 0 50px;
        text-align: center;
        background: #14181f;
        display: inline-block;
        transition: left 0.3s ease;
    }
    section .nav-items.active{
        left: 0px;
    }
    section .nav-items li{
        line-height: 40px;
        margin: 30px 0;
    }
    section .nav-items li a{
        font-size: 20px;
    }
    section form{
        position: absolute;
        top: 80px;
        right: 50px;
        opacity: 0;
        pointer-events: none;
        transition: top 0.3s ease, opacity 0.1s ease;
    }
    section form.active{
        top: 95px;
        opacity: 1;
        z-index: 10;
        pointer-events: auto;
    }
    section form:before{
        position: absolute;
        content: "";
        top: -10px;
        right: 0px;
        width: 0;
        height: 0;
        z-index: -1;
        border: 10px solid transparent;
        border-bottom-color: #1e232b;
        margin: -20px 0 0;
    }
    section form .search-data{
        width: 100%;
        color: #fff;
    }
    section form:after{
        position: absolute;
        content: '';
        height: 60px;
        padding: 2px;
        background: #1e232b;
        border-radius: 2px;
        min-width: calc(100% + 20px);
        z-index: -2;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    section .menu-icon{
        display: block;
    }
    section .search-icon,
    section .menu-icon span{
        display: block;
    }
    section .menu-icon span.hide,
    section .search-icon.hide{
        display: none;
    }
    section .cancel-icon.show{
        display: block;
    }
}
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
}
.content header{
    font-size: 30px;
    font-weight: 700;
}
.content .text{
    font-size: 30px;
    font-weight: 700;
}
.space{
    margin: 10px 0;
}

@media (max-width: 980px){
    section .menu-icon,
    section .cancel-icon,
    section .search-icon{
        margin: 5px 20px 0 20px;
    }
    section form{
        right: 30px;
    }
    section .nav-items .loginBtn{
        color: #fff;
    }
    section .nav-items .partenaireBtn{
        color: #fff;
        background: transparent;
        padding: 0px ;
    }
    section .nav-items .navLink .trainerBtn{
        color: #fff;
        margin-left: 0;
        display: block;
        line-height: 40px;
        margin: 30px 0;
    }
}
@media (max-width: 350px){
    section .menu-icon,
    section .cancel-icon,
    section .search-icon{
        margin: 0 10px;
        font-size: 16px;
    }
}
.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.content header{
    font-size: 30px;
    font-weight: 700;
}
.content .text{
    font-size: 30px;
    font-weight: 700;
}
.content .space{
    margin: 10px 0;
}
</style>
