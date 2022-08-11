<template>
    <section class="rated" data-scroll-section>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <div class="stats">
                        <div data-scroll data-scroll-speed="4" >
                            <img src="@/assets/img/circle2.svg" class="circle-bg" alt="">
                        </div>
                        <div data-scroll data-scroll-speed="5" style="height: 85vh;">
                            <img src="@/assets/img/dots2.svg" class="dots-bg" alt="">
                        </div>
                        <div data-scroll data-scroll-speed="5">
                            <img src="@/assets/img/circle-bleu.svg" class="bleu-bg" alt="">
                        </div>
                        <div class="cards-card">
                            <div class="card-stat green-card" data-scroll data-scroll-speed="2">
                                <img src="@/assets/img/lock-ico.svg">
                                <span class="titre">99%</span>
                                <p>secure</p>
                                <div class="card-stat" data-scroll data-scroll-speed="1">
                                    Upcoming feature & event 🎉
                                </div>
                                <div class="calendar">
                                    <img src="@/assets/img/calendar-ico.svg" alt="">
                                </div>
                                <div class="cards card-1" data-scroll data-scroll-speed="1">
                                    <img src="@/assets/img/user-ico.svg" alt="">
                                    <div class="content">
                                        <p>User</p>
                                        <span class="title">250K</span>
                                    </div>
                                </div>
                                <div class="cards card-2" data-scroll data-scroll-speed="3">
                                    <img src="@/assets/img/check-ico.svg" alt="">
                                    <div class="content">
                                        <p>Trusted</p>
                                        <span class="title">250+</span>
                                        <em>well-known company</em>
                                    </div>
                                </div>
                                <div class="cards card-3" data-scroll data-scroll-speed="5">
                                    <img src="@/assets/img/shield-ico.svg" alt="">
                                    <div class="content">
                                        <span class="title">Protector</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xs-1">
                    <div data-scroll data-scroll-speed="4" >
                        <img src="@/assets/img/circle1.svg" class="circle-rated" alt="">
                    </div>
                    <div class="rated-content" data-scroll data-scroll-speed="3">
                        <img src="@/assets/img/rated-ico.svg" class="ico" alt="">
                        <span class="titre">Rated</span>
                        <p class="desc">
                            our work is supervised by government agencies and is
                            guaranteed safe and we also employ experts in their fields.
                            All for the smooth performance of your company.
                        </p>
                        <a href="#" class="ico-btn" title="">
                            <img src="@/assets/img/play-circle-ico.svg">
                            <span>Watch Video</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Rated"
}
</script>

<style scoped>
.rated-content{
    padding: 0px 0px 0 120px;
    display: grid;
    place-content: center;
    height: 85vh;
}
.rated-content .ico{
    display: block;
    border-radius: 15px;
    background: #fff;
    box-shadow: 10px 20px 46px rgba(172, 172, 172, 0.55);
    max-width: 15%;
    margin-bottom: 20px;
}
.rated-content .titre{
    font-weight: 600;
    font-size: 50px;
    text-align: left;
    color: #000;
    display: block;
    margin-bottom: 15px;
}
.rated-content .desc{
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    color: #707070;
    margin-bottom: 30px;
}

.rated{
    height: 80vh;
    display: flex;
    width: 100%;
    padding: 35px 0;
}
.circle-bg{
    z-index: 1;
    position: absolute;
    margin: auto;
    right: 0;
    /* left: 0; */
    top: 50px;
    max-width: 100%;
    width: 300px;
}
.dots-bg{
    bottom: 0px;
    z-index: -5;
    position: absolute;
    /* margin: auto; */
    left: 40px;
    right: 57px;
    /* top: 420px; */
    max-width: 100%;
    width: 145px;
    opacity: 0.6;
}
.bleu-bg{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 75px;
    margin: auto;
}
.stats{
    position: relative;
    width: 100%;
    height: 100%;
}
.green-card{
    background: #33E0BB;
    position: absolute;
    top: 0;
    text-align: center;
    margin: auto;
    padding: 70px 60px 100px 60px;
    right: 0;
    left: 0;
    bottom: 0;
    height: max-content;
    width: max-content;
}
.green-card img{
    display: block;
    max-width: 49%;
    margin: auto;
}
.green-card .titre{
    font-weight: 600;
    font-size: 45px;
    text-align: left;
    color: #fff;
}
.green-card p{
    font-size: 20px;
    /* text-align: left; */
    color: #fff;
    line-height: 0;
}
.green-card .card-stat{
    position: absolute;
    font-size: 16px;
    padding: 15px 20px;
    left: -50px;
    bottom: 30px;
    color: #707070;
}
.calendar img{
    margin: 0;
    position: absolute;
    left: -65px;
    /*top: 45px;*/
    max-width: 60% !important;
    animation: icons 3s linear infinite;
}
.cards{
    display: flex;
    position: absolute;
    border-radius: 15px;
    padding: 10px 16px;
    background: rgb(255, 255, 255);
    box-shadow: rgba(172, 172, 172, 0.55) 10px 20px 46px;
    height: max-content;
}
.card-1{
    top: -90px;
    left: -35px; 
    text-align: left;
}
.card-2{
    top: -65px;
    right: -210px;
    padding: 25px 15px;
    text-align: left;
}
.card-3{
    right: -180px;
    bottom: 0px;
    top: 100px;
    padding: 15px 20px;
}
.card-3 .title{
    font-size: 25px !important;
    font-weight: 500 !important;
}
.card-2 img{
    max-width: 25% !important;
    box-shadow: 10px 20px 46px rgba(172, 172, 172, 0.55);
    border-radius: 15px;
}
.card-2 em{
    font-size: 12px;
    text-align: left;
    color: #ff8400;
}
.card-1 img, .cards img{
    max-width: 20%;
}
.card-1 .content, .cards .content{
    display: grid;
    place-content: center;
    padding: 5px 15px;
}
.card-1 .content p, .cards .content p{
    color: #707070;
    margin: 0;
    left: initial;
    line-height: 1;
    font-size: 15px;
    font-weight: 500;
}
.cards .content .title{
    font-weight: 600;
    font-size: 30px;
    text-align: left;
    color: #000;
    line-height: 1.2;
    letter-spacing: -1px;
}
.circle-rated{
    position: absolute;
    right: 0;
    top: 100px;
    bottom: 0;
    margin: 0;
    max-width: 20%;
}
</style>