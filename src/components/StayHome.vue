<template>
    <section class="home" data-scroll-section>
        <div data-scroll data-scroll-speed="4" >
            <img src="@/assets/img/emoji.svg" class="emoji-bg" alt="">
        </div>
        <div data-scroll data-scroll-speed="4" >
            <img src="@/assets/img/dots3.svg" class="dots-bg" alt="">
        </div>
        <div class="container">
            <div data-scroll data-scroll-speed="4" >
                <img src="@/assets/img/circle2.svg" class="cercle-bg" alt="">
            </div>
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <div class="img">
                                <img src="@/assets/img/img1.svg" data-scroll data-scroll-speed="2" alt="">
                                <img src="@/assets/img/img2.svg" data-scroll data-scroll-speed="2" alt="">
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div class="img pad-t-50">
                                <img src="@/assets/img/img3.svg" data-scroll data-scroll-speed="3" alt="">
                                <div class="plan" data-scroll data-scroll-speed="3" >
                                    <img src="@/assets/img/plan.svg" class="img-plan" alt="">
                                    <span>Plan</span>
                                    <p>
                                        our work is supervised by 
                                        government agencies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="stay-home text-right" data-scroll data-scroll-speed="3">
                        <img src="@/assets/img/home-ico.svg" alt="">
                        <h3>Just stay at home and we'll do it all.</h3>
                        <p>
                            Just stay at home and we'll do it all, no need to 
                            worry that all your work is in good hands
                        </p>
                        <a href="#" class="ico-btn" title="">
                            <img src="@/assets/img/play-circle-ico.svg">
                            <span>See How It Works</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "StayHome"
}
</script>

<style scoped>
.home{
    height: 100vh;
    width: 100%;
    padding: 35px 0;
}
.emoji-bg{
    max-width: 15%;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 5;
}
.dots-bg{
    max-width: 12%;
    opacity: 0.7;
    position: absolute;
    right: 75px;
    top: 0;
}
.cercle-bg{
    opacity: 0.7;
    position: absolute;
    left: 0;
    top: 187px;
    right: 0;
    margin: auto;
    max-width: 34%;
}
.img img{
    border-radius: 20px;
    margin-bottom: 20px;
    max-width: 100%;
}
.pad-t-50{
    padding-top: 50px;
}
.plan{
    background: #fff;
    padding: 25px;
    border-radius: 20px;
    text-align: center;
}
.plan img{
    width: 45%;
}
.plan span{
    display: block;
    color: #4B6FDB;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 20px;
}
.plan p{
    color: #707070;
    margin: 0;
    font-size: 14px;
}
.stay-home img{
    border-radius: 25px;
    background: #fff;
    box-shadow: 10px 20px 46px rgb(172 172 172 / 55%);
    padding: 20px;
}
.stay-home h3{
    color: #000;
    font-weight: 400;
    font-size: 50px;
    margin-top: 35px;
}
.stay-home p{
    margin-top: 50px;
    font-size: 20px;
}
.ico-btn{
    margin-top: 50px
}
.ico-btn img{
    background: transparent !important;
    box-shadow: none;
    padding: 0;
}
</style>