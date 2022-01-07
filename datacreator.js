const mongoose = require("mongoose");
const Item = require("./models/Item");
mongoose.connect(
  "mongodb://127.0.0.1:27017/ecommerce",
  { useNewUrlParser: true },
  () => {
    console.log("connected to database");
  }
);
let arr = [
  {
    name: "FOXTER",
    image:
      "https://rukminim1.flixcart.com/image/309/371/k3t21zk0/watch/z/h/y/chronograph-design-foxter-original-imafmuhzpnuqhmtr.jpeg?q=50",
    clicks: 0,
    description:
      "Chronograph Design Brown Strap White Dial Analog Watch - For Boys",
    price: 198,
  },
  {
    name: "ARMADO",
    image:
      "https://rukminim1.flixcart.com/image/714/857/jyyqc280/watch/d/q/q/71000-armado-original-imafekxjyt7pwbpf.jpeg?q=50",
    clicks: 0,
    description: "AR-00071 chronograph pattren Analog Watch - For Men",
    price: 449,
  },
  {
    name: "LIMESTORNE",
    image:
      "https://rukminim1.flixcart.com/image/714/857/km9ht3k0/watch/b/t/s/ls2734-limestone-original-imagf799an7rxgfz.jpeg?q=50",
    clicks: "",
    description:
      "LS2734 Wolf Gents Exclusive Mesh Strap Analog Analog Watch - For Men",
    price: 185,
  },
  {
    name: "ANALOGUE",
    image:
      "https://rukminim1.flixcart.com/image/714/857/kpodocw0/watch/p/l/t/anlg-428-blue-blu-analogue-original-imag3uxbhfkyhahf.jpeg?q=50",
    clicks: 0,
    description:
      "ANLG-428-BLUE-BLU All Blue Boys Series Analog Watch - For Boys",
    price: 8877,
  },
  {
    name: "Espoir",
    image:
      "https://rukminim1.flixcart.com/image/714/857/k4ohqq80/watch/v/5/d/es2615-espoir-original-imafnj6shv5bpxxh.jpeg?q=50",
    clicks: 0,
    description:
      "ES2615 Day And Date Functioning High Quality Analog Watch - For Men",
    price: 241,
  },
  {
    name: "Seiko",
    image:
      "https://rukminim1.flixcart.com/image/309/371/jmux18w0/watch/3/k/3/ssc572p1-seiko-original-imaf9z94j4jmgbm4.jpeg?q=50",
    clicks: 0,
    description: "SSC572P1 Analog Watch - For Men",
    price: 44625,
  },
  {
    name: "CASIO",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/krz97rk0/watch/u/h/5/g652-casio-original-imag5n4mhkkgr9hz.jpeg?q=50",
    clicks: 0,
    description:
      "G652 G-Shock ( GWG-1000-1A3DR ) Analog-Digital Watch - For Men",
    price: 42995,
  },
  {
    name: "TAG HEUER",
    image:
      "https://rukminim1.flixcart.com/image/309/371/j7td5e80/watch/k/m/v/way111z-ba0928-tag-heuer-original-imaexzyk6tupbgbh.jpeg?q=50",
    clicks: 0,
    description: "WAY111Z.BA0928 Analog Watch - For Men",
    price: 95850,
  },
  {
    name: "EMPORIO ARMANI",
    image:
      "https://rukminim1.flixcart.com/image/714/857/jziqhzk0/watch/p/h/d/ar11238-emporio-armani-original-imafgvqnrzqkue5t.jpeg?q=50",
    clicks: 0,
    description: "AR11238 Aviator Analog Watch - For Men",
    price: 24495,
  },
  {
    name: "Titan ",
    image:
      "https://rukminim1.flixcart.com/image/714/857/ksw4ccw0/watch/s/g/2/1696nc01-titan-men-original-imaf9fb9gzdpadmg.jpeg?q=50",
    clicks: 0,
    description: "1696NC01 Edge Analog Watch - For Men",
    price: 25995,
  },
  {
    name: "FOXTER-2",
    image:
      "https://rukminim1.flixcart.com/image/309/371/k3t21zk0/watch/z/h/y/chronograph-design-foxter-original-imafmuhzpnuqhmtr.jpeg?q=50",
    clicks: 0,
    description:
      "Chronograph Design Brown Strap White Dial Analog Watch - For Boys",
    price: 198,
  },
  {
    name: "ARMADO-2",
    image:
      "https://rukminim1.flixcart.com/image/714/857/jyyqc280/watch/d/q/q/71000-armado-original-imafekxjyt7pwbpf.jpeg?q=50",
    clicks: 0,
    description: "AR-00071 chronograph pattren Analog Watch - For Men",
    price: 449,
  },
  {
    name: "LIMESTORNE-2",
    image:
      "https://rukminim1.flixcart.com/image/714/857/km9ht3k0/watch/b/t/s/ls2734-limestone-original-imagf799an7rxgfz.jpeg?q=50",
    clicks: 0,
    description:
      "LS2734 Wolf Gents Exclusive Mesh Strap Analog Analog Watch - For Men",
    price: 185,
  },
  {
    name: "ANALOGUE-2",
    image:
      "https://rukminim1.flixcart.com/image/714/857/kpodocw0/watch/p/l/t/anlg-428-blue-blu-analogue-original-imag3uxbhfkyhahf.jpeg?q=50",
    clicks: 0,
    description:
      "ANLG-428-BLUE-BLU All Blue Boys Series Analog Watch - For Boys",
    price: 8877,
  },
  {
    name: "Espoir-2",
    image:
      "https://rukminim1.flixcart.com/image/714/857/k4ohqq80/watch/v/5/d/es2615-espoir-original-imafnj6shv5bpxxh.jpeg?q=50",
    clicks: 0,
    description:
      "ES2615 Day And Date Functioning High Quality Analog Watch - For Men",
    price: 241,
  },
  {
    name: "Seiko-2",
    image:
      "https://rukminim1.flixcart.com/image/309/371/jmux18w0/watch/3/k/3/ssc572p1-seiko-original-imaf9z94j4jmgbm4.jpeg?q=50",
    clicks: 0,
    description: "SSC572P1 Analog Watch - For Men",
    price: 44625,
  },
  {
    name: "CASIO-2",
    image:
      "https://rukminim1.flixcart.com/image/880/1056/krz97rk0/watch/u/h/5/g652-casio-original-imag5n4mhkkgr9hz.jpeg?q=50",
    clicks: 0,
    description:
      "G652 G-Shock ( GWG-1000-1A3DR ) Analog-Digital Watch - For Men",
    price: 42995,
  },
  {
    name: "TAG HEUER-2",
    image:
      "https://rukminim1.flixcart.com/image/309/371/j7td5e80/watch/k/m/v/way111z-ba0928-tag-heuer-original-imaexzyk6tupbgbh.jpeg?q=50",
    clicks: 0,
    description: "WAY111Z.BA0928 Analog Watch - For Men",
    price: 95850,
  },
  {
    name: "EMPORIO ARMANI-2",
    image:
      "https://rukminim1.flixcart.com/image/714/857/jziqhzk0/watch/p/h/d/ar11238-emporio-armani-original-imafgvqnrzqkue5t.jpeg?q=50",
    clicks: 0,
    description: "AR11238 Aviator Analog Watch - For Men",
    price: 24495,
  },
  {
    name: "Titan-2",
    image:
      "https://rukminim1.flixcart.com/image/714/857/ksw4ccw0/watch/s/g/2/1696nc01-titan-men-original-imaf9fb9gzdpadmg.jpeg?q=50",
    clicks: 0,
    description: "1696NC01 Edge Analog Watch - For Men",
    price: 25995,
  },
];
async function main() {
  await Item.create(arr);
}
main();
