<script>
import algoliasearch from 'algoliasearch/lite';
import 'instantsearch.css/themes/algolia-min.css';
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';

export default {
  data() {
    return {
      searchClient: algoliasearch(
          '7730XLLAP0',
          'fe70212cb16a3680607995bb15a64988'
      ),
    };
  },
  methods: {
    getPropertyByPath,
  },
};
</script>

<template>
  <ais-instant-search :search-client="searchClient" index-name="smart_travel">
    <ais-configure :hits-per-page.camel="5"></ais-configure>
    <ais-search-box></ais-search-box>
    <ais-hits>
      <template v-slot:item="{ item }">
        <div class="hit-location_name">
				  <ais-highlight attribute="location_name" :hit="item"></ais-highlight>
				</div>
      </template>
    </ais-hits>
  </ais-instant-search>
</template>


<style>
.ais-SearchBox {
  margin-bottom: 1em;
}

.ais-InstantSearch {
  max-width: 960px;
  width: 100%;
  display: block;
  overflow: hidden;
  margin: 0 auto
}

.ais-Hits-item {
  margin-left: 0;
  width: 100%;
}

.ais-Hits-item img {
  margin-right: 1em
}

.ais-Hits-list {
  margin-bottom: 1em;
}
</style>