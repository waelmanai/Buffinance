<template>
    <section class="partnership" data-scroll-section>
        <!--
        <div data-scroll data-scroll-speed="4" >
            <img src="@/assets/img/dots3.svg" class="dots-bg" alt="">
        </div>
        <div data-scroll data-scroll-speed="4" >
            <img src="@/assets/img/circle2.svg" class="circle-bg" alt="">
        </div>
        -->
        <div class="container">
            <div class="row">
                <div class="heading">
                    <div class="titre">
                        <h3>Make your partnership <br /> easy 🤝</h3>
                        <p>
                            we would like to contribute to your journey by solving the most impactful issues
                            on your way. If you will let us, we would like to guide you through the following.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-7 col-xs-12 left-cards">
                    <div class="card-partenaire m-b-30">
                        <div class="content">
                            <span>Cozy and Creative Workingspace</span>
                            <p>the best place to find idea is the place where you working.</p>
                        </div>
                        <img src="@/assets/img/img4.svg" class="" alt="">
                    </div>
                    <div class="card-partenaire orange">
                        <img src="@/assets/img/img5.svg" class="" alt="">
                        <div class="content">
                            <span>Cozy and Creative Workingspace</span>
                            <p>the best place to find idea is the place where you working.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-xs-12">
                    <div class="main-card">
                        <div class="img-block">
                            <img src="@/assets/img/img6.svg" class="" alt="">
                        </div>
                        <div class="content">
                            <span>Learn with the others</span>
                            <p>learn and spend time wisely is the best way how to grow big company.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-t-60">
                <a href="#" class="ico-btn m-a" title="">
                    <img src="@/assets/img/play-circle-ico.svg">
                    <span>See More How We Do It</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Partnership",
}
</script>

<style scoped>
.partnership{
    height: 200vh;
    padding: 100px 0;
    display: flex;
    place-content: center;
    position: relative;
}
.partnership .row{
    height: auto;
}
.partnership .heading{
    text-align: center;
    padding: 0 20%;
    margin-bottom: 80px;
}
.partnership .heading h3{
    font-size: 35px;
}
.partnership .heading p{
    font-size: 16px;
    padding: 30px 0;
    margin: 0;
    color: #707070;
}
.partnership img{
    max-width: 100%;
}
.partnership .card-partenaire{
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    position: relative;
    align-items: center;
    background: #6A00FF;
    overflow: hidden;
}
.partnership .card-partenaire .content{
    color: #fff;
    padding: 0 20px;
}
.partnership .card-partenaire .content span{
    margin-bottom: 20px;
    display: block;
    font-weight: normal;
}
.partnership .card-partenaire .content p{
    margin: 0;
    font-size: 13px;
}
.left-cards img{
    width: 60%;
}
.orange{
    background: #FF8400 !important;
}
.main-card{
    background: #FF0054;
    overflow: hidden;
    border-radius: 20px;
}
.main-card .content{
    padding: 25px 50px;
    color: #fff;
}
.main-card span{
    font-size: 18px;
    display: block;
    margin-bottom: 10px;
    font-weight: lighter;
}
.main-card p{
    margin: 0;
    font-size: 16px;
    font-weight: lighter;
}
.m-b-30{
    margin-bottom: 30px;
}
.m-a{
    margin: auto;
}
.m-t-60{
    margin-top: 60px;
}
</style>