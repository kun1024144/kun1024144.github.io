<script setup>
import { ref } from "vue";
import MdiGithub from "~icons/mdi/github";
import MdiInstagram from "~icons/mdi/instagram";
import MdiFacebook from "~icons/mdi/facebook"
import MdiDiscord from "~icons/mdi/discord"
import MdiYoutube from "~icons/mdi/youtube"
import MdiSteam from "~icons/mdi/steam"
import MdiSpotify from "~icons/mdi/spotify"
import MdiTwitch from "~icons/mdi/twitch"
import Typing from "@components/Typing.vue";

const step = ref(0);
</script>
<template>
    <div class="w-full overflow-y-auto px-8 pt-16 sm:px-12 sm:pt-20 lg:px-16 lg:pt-24">
        <Typing
            v-if="step >= 0"
            @done="step++"
            text="Welcome to Kun's Website~"
            class="mb-2 block text-2xl sm:text-3xl lg:text-4xl"
        />
        <Typing v-if="step >= 1" @done="step++" text="Hi~" :speed="60" /> <br/>
        <Typing v-if="step >= 2" @done="step++" text="SSHS 238" :speed="60" /> <br/>
        <Typing v-if="step >= 3" @done="step++" text="A coding newcomer" :speed="60" /> <br/>
        <a
            v-if="step >= 2"
            class="mt-8 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://github.com/kun1024144"
            target="_blank"
        >
            <MdiGithub class="mr-1 inline-block" />
            <Typing v-if="step >= 2" @done="step++" text="kun1024144" :speed="60" />
        </a>
        <a
            v-if="step >= 3"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://instagram.com/kun.20051012"
            target="_blank"
        >
            <MdiInstagram class="mr-1 inline-block text-red-500" />
            <Typing v-if="step >= 3" @done="step++" text="kun.20051012" :speed="60" />
        </a>
        <a
            v-if="step >= 4"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://www.facebook.com/profile.php?id=100009472331244"
            target="_blank"
        >
            <MdiFacebook class="mr-1 inline-block text-blue-500" />
            <Typing v-if="step >= 4" @done="step++" text="張彥坤" :speed="60" />
        </a>
        <a
            v-if="step >= 5"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://discordapp.com/users/561808211406094337"
            target="_blank"
        >
            <MdiDiscord class="mr-1 inline-block text-purple-500" />
            <Typing v-if="step >= 5" @done="step++" text="叫偶蛇蛇" :speed="60" />
        </a>
        <a
            v-if="step >= 6"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://www.youtube.com/channel/UCFiRo8JUZKbaOmxfMHREanA"
            target="_blank"
        >
            <MdiYoutube class="mr-1 inline-block text-red-500" />
            <Typing v-if="step >= 6" @done="step++" text="KunChang" :speed="60" />
        </a>
        <a
            v-if="step >= 7"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://steamcommunity.com/profiles/76561198967721350"
            target="_blank"
        >
            <MdiSteam class="mr-1 inline-block text-gray-500" />
            <Typing v-if="step >= 7" @done="step++" text="snakerouo" :speed="60" />
        </a>
        <a
            v-if="step >= 8"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://open.spotify.com/user/314wyczhqfh5vyblad44e6nw6aim?si=09e8bd699b3b4e33"
            target="_blank"
        >
            <MdiSpotify class="mr-1 inline-block text-green-500" />
            <Typing v-if="step >= 8" @done="step++" text="蛇蛇_snaker" :speed="60" />
        </a>
        <a
            v-if="step >= 9"
            @done="step++"
            class="mt-4 flex items-center text-lg text-gray-500 transition-all hover:text-gray-700"
            href="https://www.twitch.tv/kun_1012"
            target="_blank"
        >
            <MdiTwitch class="mr-1 inline-block text-purple-500" />
            <Typing v-if="step >= 9" @done="step++" text="蛇蛇很棒" :speed="60" />
        </a>
    </div>
</template>