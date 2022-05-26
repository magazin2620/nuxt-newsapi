<template>
  <div>
    <div class="flex justify-center">
      <div class="mb-3">
        <form
          class="input-group relative flex items-stretch w-full mb-4"
          @submit.prevent="newSearchWord"
        >
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search for latest news"
            aria-label="Search"
            aria-describedby="button-addon3"
            v-model="searchWord"
          />
          <button
            class="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            type="button"
            id="button-addon3"
            @click="newSearchWord"
          >
            Search
          </button>
        </form>
      </div>
    </div>
    <ul v-for="(article, index) in articles" :key="index">
      <li class="py-2 border-t">
        <article class="grid grid-rows-1 grid-cols-[2fr_2fr_7fr]">
          <p>{{ formatDate(article.date) }}</p>
          <a :href="`${article.url}`" target="_blank">
            <p>{{ article.source }}</p>
          </a>
          <a :href="`${article.url}`" target="_blank">
            <h3 class="pl-10 hover:text-sky-700">{{ article.title }}</h3>
          </a>
        </article>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      searchWord: "Web 3.0",
    };
  },
  computed: {
    ...mapState({
      articles: (state) => state.articles,
    }),
  },
  methods: {
    ...mapActions({
      getData: "getData",
    }),
    ...mapMutations({
      addSearchWord: "addSearchWord",
      resetSearchInput: "resetSearchInput",
    }),
    newSearchWord() {
      this.resetSearchInput();
      this.addSearchWord(this.searchWord);
      this.getData();
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  created() {
    this.resetSearchInput();
    this.addSearchWord(this.searchWord);
    this.getData();
  },
};
</script>
