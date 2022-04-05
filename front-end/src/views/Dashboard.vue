<template>
  <LayoutDefault name="LayoutDefault">
    <MainContent :headerTitle="headerTitle" :listItem="listItem" />
  </LayoutDefault>
</template>

<script>
import LayoutDefault from "../layouts/LayoutDefault";
import MainContent from "../layouts/MainContent.vue";
export default {
  name: `Home`,
  components: {
    LayoutDefault,
    MainContent,
  },
  data() {
    return {
      headerTitle: "Trending NFT",
      listItem: [
        {
          title: "Wrost Artwork",
          author: "Tom Jones",
          avatar_url: "https://placekitten.com/300/300",
          thumbnail_url:
            "https://i-sohoa.vnecdn.net/2021/12/20/bored-ape-nft-accidental-0-728-7234-6530-1639974498_680x0.jpg",
          price: "3.5",
          coin: "eth",
        },
        {
          title: "Wrost Artwork",
          author: "Tom Jones",
          avatar_url: "https://placekitten.com/300/300",
          thumbnail_url:
            "https://i-sohoa.vnecdn.net/2021/12/20/bored-ape-nft-accidental-0-728-7234-6530-1639974498_680x0.jpg",
          price: "3.5",
          coin: "eth",
        },
        {
          title: "Wrost Artwork",
          author: "Tom Jones",
          avatar_url: "https://placekitten.com/300/300",
          thumbnail_url:
            "https://i-sohoa.vnecdn.net/2021/12/20/bored-ape-nft-accidental-0-728-7234-6530-1639974498_680x0.jpg",
          price: "3.5",
          coin: "eth",
        },
        {
          title: "Wrost Artwork",
          author: "Tom Jones",
          avatar_url: "https://placekitten.com/300/300",
          thumbnail_url:
            "https://i-sohoa.vnecdn.net/2021/12/20/bored-ape-nft-accidental-0-728-7234-6530-1639974498_680x0.jpg",
          price: "3.5",
          coin: "eth",
        },
      ],
    };
  },
};
</script>
