export const state = () => ({
  apiUrl: "",
  apiKey: "7d24edd2d4064ad1be59bfd3aba4a32b",
  searchWord: "",
  currentPage: 1,
  totalResults: 0,
  maxPerPage: 20,
  articles: [],
});

export const getters = {};

export const mutations = {
  addArticles(state, data) {
    for (let i = 0; i < data.articles.length; i++) {
      state.articles.push({
        date: data.articles[i].publishedAt,
        source: data.articles[i].source.name,
        title: data.articles[i].title,
        url: data.articles[i].url,
      });
    }
    state.articles.sort((a, b) => (a["date"] > b["date"] ? -1 : 1));
    state.articles = state.articles.reduce(
      (arr, el) => (
        arr.find(({ title }) => el.title == title) || arr.push(el), arr
      ),
      []
    );
  },
  addSearchWord(state, searchWord) {
    state.searchWord = searchWord;
  },
  resetSearchInput(state) {
    state.currentPage = 1;
    state.articles = [];
  },
};

export const actions = {
  async getData({ commit, state }) {
    const data = await this.$axios.$get(
      "https://newsapi.org/v2/everything?q=" +
        state.searchWord +
        "&pageSize=" +
        state.maxPerPage +
        "&apiKey=" +
        state.apiKey +
        "&page=" +
        state.currentPage
    );
    commit("addArticles", data);
  },
};
