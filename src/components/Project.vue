<script setup>
import Typing from "@components/Typing.vue";

defineProps({
    name: { type: String, default: "Project" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    link: { type: String, default: "" },
    tags: { type: Array, default: () => [] },
});
</script>

<template>
    <div>
        <h1 class="text-2xl">{{ name }}</h1><br />
        <br/>{{ description }}<br /><br />
        <img :src="image" /><br /><br />
        link: <br/>
        <a :href="link">click me to see more</a><br /><br />
        tags: <br/>
        <Typing :text="tags.join(' / ')" />
    </div>
</template>
