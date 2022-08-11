<template>
    <section class="header" data-scroll-section>
        <div data-scroll data-scroll-speed="5">
            <img src="@/assets/img/dots.svg" class="dots" alt="dots">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-xs-12 order-xs-2">
                    <div class="heading">
                        <h1 data-scroll data-scroll-speed="1">
                            Put your business <br>
                            on auto-pilot
                        </h1>
                        <p data-scroll data-scroll-speed="2">
                            make your business evolve into the biggest business <br>
                            in this century with buffiness all your needs will be taken <br>
                            care of easily in no more than 7 days.
                        </p>
                        <a href="#" class="simple-btn" data-scroll data-scroll-speed="2">Start auto-pilot</a>
                    </div>
                </div>
                <div class="col-md-7 col-xs-12 order-xs-1">
                    <div data-scroll data-scroll-speed="1">
                        <img src="@/assets/img/polywork.svg" class="polywork" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.dots{
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: -35px;
    /* max-width: 100%; */
    width: 150px;
    opacity: 0.6;
}
.header{
    height: calc(100vh - 100px);
    display: flex;
    place-items: center;
    width: 100%;
}
h1{
    font-weight: 600;
    font-size: 36px;
    text-align: left;
    color: #000;
    margin-bottom: 10px;
}
p{
    font-weight: normal;
    font-size: 17px;
    text-align: left;
    color: #707070;
    margin: 0;
}
a{
    margin-top: 30px;
}
.polywork{
    max-width: 120%;
    text-align: center;
    margin: auto;
    display: block;
}
.col-md-5, .col-md-7{
    align-self: center;
}
</style>