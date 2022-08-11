<template>
    <section class="why-section" data-scroll-section>
        <div class="container">
            <div class="row">
                <div class="col-sm-5 col-xs-12">
                    <p class="titre" data-scroll data-scroll-speed="1">why us ?</p>
                    <span data-scroll data-scroll-speed="2">
                        Perfect solution for
                        your business 📖
                    </span>
                </div>
                <div class="col-sm-7 col-xs-12">
                    <img src="@/assets/img/heart.svg" class="heart" alt="" data-scroll data-scroll-speed="1">
                    <p class="desc" data-scroll data-scroll-speed="2">
                        We organize your business trip stably so that you can relax quietly in <br>
                        your home comfortably without worrying about the movement of <br>
                        your business.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "WhyUs",
}
</script>

<style scoped>
.why-section{
    height: 40vh;
    padding: 50px 0;
    display: flex;
    place-content: center;
}
.titre{
    font-weight: 600;
    font-size: 22px;
    text-align: left;
    color: #4b6fdb;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 0;
}
span{
    font-weight: 600;
    font-size: 42px;
    text-align: left;
    color: #000;
    line-height: 1.3;
    margin-top: 15px;
    display: block;
}
.heart{
    width: 8%;
    text-align: left;
    margin: 0;
    box-shadow: 10px 20px 46px rgba(172, 172, 172, 0.55);
    background: #fff;
    border-radius: 10px;
    display: block;
    margin-bottom: 30px;
}
.desc{
    margin: 0;
    font-weight: normal;
    font-size: 17px;
    text-align: left;
    color: #707070;
}
</style>