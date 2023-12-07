<script setup>
import axios from "axios";
import octacat from "../assets/images/octocat.png";
import {ref, onMounted} from "vue";
const $User = ref("");
const $name = ref("the octacat");
const userName = ref("@octacat");
const statusOfSearch = ref(false);
const repos = ref(8);
const followers = ref(3965);
const following = ref("9");
const bio = ref("this profile has no bio");
const avatar = ref(octacat);
const company = ref("not available");
const location = ref("san francisco");
const created = ref("joined 25 jan 2011");
const twitter = ref("not available");
const link = ref("github.Blog");
function $search(e) {
    e.preventDefault();

    statusOfSearch.value = true;
    async function $fetch() {
        let $userApi = await axios.get(
            `https://api.github.com/users/${$User.value}`
        );
        return $userApi;
    }
    $fetch()
        .then((response) => {
            let {data} = response;
            statusOfSearch.value = false;
            $name.value = data.login;
            userName.value = data.name ? `@${data.name}` : "not available";
            repos.value = data.public_repos;
            followers.value = data.followers;
            following.value = data.following;
            bio.value = data.bio ? data.value : "not available";
            avatar.value = data.avatar_url;
            company.value = data.company ? data.company : "not available";
            location.value = data.location ? data.location : "not available";
            const created_day = new Date(data.created_at);
            created.value = `joined ${created_day.getDate()} ${
                [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sept",
                    "Oct",
                    "Nov",
                    "Dec",
                ][created_day.getMonth()]
            } ${created_day.getFullYear()}`;
            twitter.value = data.twitter_username
                ? data.twitter_username
                : "not available ";
            link.value = data.email ? data.email : "not available";
        })
        .catch((error) => {
            statusOfSearch.value = false;
            let $arr = [$name, userName, repos, followers, following, bio, company, created, twitter, link];
            $arr.forEach(($dataField) => ($dataField.value = "not Found"));
            avatar.value = octacat;
        });
    $User.value = "";
}
</script>

<template>
    <form
        @submit="$search"
        class="p-2 bg-LightbgSecondary dark:bg-darkbgSecondary mt-20 flex justify-between items-center rounded-xl gap-x-5 shadow-custom-321 dark:shadow-none relative"
    >
        <div class="flex-1 relative">
            <input
                type="text"
                id="searchBar"
                v-model="$User"
                autocomplete="off"
                placeholder="octacat"
                class="w-full block focus-within:outline-none p-3 px-5 pl-16 text-LighttxtHighContrast dark:text-darktxtHighContrast bg-LightbgSecondary dark:bg-darkbgSecondary placeholder:text-Lighttxtsearch placeholder:dark:text-darktxtsearch placeholder:text-[17px] selection:bg-blue-400"
            />
            <span class="seach-icon absolute top-2/4 -translate-y-2/4 left-4">
                <svg height="24" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
                        fill="#0079ff"
                    />
                </svg>
            </span>
        </div>
        <button
            class="p-3 px-5 rounded-xl bg-primary text-darktxtsearch text-[18px] border-none"
        >
            search
        </button>
        <div
            v-show="statusOfSearch"
            class="loading flex justify-center gap-7 text-Lighttxtsearch text-[18px] dark:text-darktxtsearch absolute left-2/4 -translate-x-2/4 -top-[4.5rem]"
        >
            loading ...
        </div>
    </form>
    <div
        class="info mt-5 relative bg-LightbgSecondary dark:bg-darkbgSecondary shadow-custom-321 dark:shadow-none py-[40px] px-[20px] md:px-[40px] rounded-xl"
    >
        <div
            class="top flex items-center md:justify-between gap-x-6 md:gap-x-0"
        >
            <div class="image w-[70px] h-[70px] md:w-[15%]">
                <img
                    :src="avatar"
                    class="max-w-none w-full rounded-full"
                    alt="octocat"
                />
            </div>
            <div
                class="main-info md:basis-[80%] flex flex-col md:flex-row md:items-center md:justify-between md:flex-wrap"
            >
                <span
                    class="name text-[20px] md:text-[30px] md:flex-1 capitalize dark:text-darktxtHighContrast text-Lighttxtsearch"
                    >{{ $name }}</span
                >
                <span
                    class="username text-[#0079ff] md:basis-full md:order-last"
                >
                    {{ userName }}</span
                >
                <span
                    class="joined md:flex-1 md:text-right text-LightthemeswitchBtnHover dark:text-darktxtMidContrast text-[14px]"
                    >{{ created }}</span
                >
            </div>
        </div>
        <div class="bottom mt-8 md:mt-3 md:flex md:justify-end">
            <div class="content md:w-[80%]">
                <span class="block mb-7 text-darkgray text-[14px] capitalize">{{
                    bio
                }}</span>
                <ul
                    role="list"
                    class="flex bg-Lightbg dark:bg-darkbg py-6 px-3 rounded-xl flex-col gap-y-6 md:flex-row md:gap-y-0 md:justify-between"
                >
                    <li
                        role="listitem"
                        class="basis-full md:basis-[20%] flex justify-between items-center md:flex-col md:items-start text-[13px] capitalize dark:text-darktxtHighContrast text-LightthemeswitchBtnHover"
                        id="reops"
                    >
                        <span class="text-[13px]">Repos</span>
                        <span class="text-[24px]">{{ repos }}</span>
                    </li>
                    <li
                        role="listitem"
                        class="basis-full md:basis-[20%] flex justify-between items-center md:flex-col md:items-start text-[13px] capitalize dark:text-darktxtHighContrast text-LightthemeswitchBtnHover"
                        id="followers"
                    >
                        <span class="text-[13px]"> followers</span>
                        <span class="text-[24px]">{{ followers }}</span>
                    </li>
                    <li
                        role="listitem"
                        id="following"
                        class="basis-full md:basis-[20%] flex justify-between items-center md:flex-col md:items-start capitalize dark:text-darktxtHighContrast text-LightthemeswitchBtnHover"
                    >
                        <span class="text-[13px]"> following</span>
                        <span class="text-[24px]">{{ following }}</span>
                    </li>
                </ul>
                <ul
                    role="list"
                    class="flex flex-col mt-7 gap-y-5 md:flex-row md:gap-y-5 md:flex-wrap md:gap-x-[40%]"
                >
                    <li
                        role="listitem"
                        class="flex gap-x-3 md:flex-1 items-center"
                    >
                        <span class="icon">
                            <svg
                                height="20"
                                width="14"
                                xmlns="http://www.w3.org/2000/svg"
                                class="fill-[#4b6a9b] dark:fill-darktxtsearch"
                            >
                                <path
                                    d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                                />
                            </svg>
                        </span>
                        <span
                            class="location text-[#4b6a9b] dark:text-darktxtsearch capitalize text-[15px]"
                            >{{ location }}</span
                        >
                    </li>
                    <li
                        role="listitem"
                        class="flex gap-x-3 md:flex-1 items-center"
                    >
                        <span class="icon"
                            ><svg
                                height="18"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                                    fill="#8e94a3"
                                /></svg
                        ></span>
                        <a
                            class="location text-darkgray capitalize text-[15px] hover:underline"
                            href="#"
                            >{{ twitter }}</a
                        >
                    </li>
                    <li
                        role="listitem"
                        class="flex gap-x-3 md:flex-1 items-center"
                    >
                        <span class="icon">
                            <svg
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                                class="fill-[#4b6a9b] dark:fill-darktxtsearch"
                            >
                                <g>
                                    <path
                                        d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"
                                    />
                                    <path
                                        d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"
                                    />
                                </g>
                            </svg>
                        </span>
                        <a
                            class="location text-[#4b6a9b] dark:text-darktxtsearch text-[15px] hover:underline"
                            href="#"
                            >{{ link }}</a
                        >
                    </li>
                    <li
                        role="listitem"
                        class="flex gap-x-3 md:flex-1 items-center"
                    >
                        <span class="icon">
                            <svg
                                height="20"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                                class="fill-[#4b6a9b] dark:fill-darktxtsearch"
                            >
                                <g>
                                    <path
                                        d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"
                                    />
                                </g>
                            </svg>
                        </span>
                        <span
                            class="location text-[#4b6a9b] dark:text-darktxtsearch text-[15px]"
                            >{{ company }}</span
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>
