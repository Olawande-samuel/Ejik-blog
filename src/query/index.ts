export const ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES = `*[_type == "post" && $_id in categories[]->.title]|order(_createdAt desc)[0...10] {
    author-> {name, _id},
    mainImage {
    asset-> {
    url,
    assetId
    }
    },
    slug,
    title,
    categories[]-> {
    _id,
    title
    },
    _id,
    body[] {..., asset-> {
    url, _id
  }},
    _createdAt
  }
  `;
export const ALL_POSTS_QUERY_BY_ID_IN_CATEGORIES_COUNT = `count(*[_type == "post" && $_id in categories[]->.title]|order(_createdAt desc) {
    _id,
    _createdAt
  }
 )`;
export const ALL_POSTS_QUERY = `*[_type == "post"]|order(_createdAt desc)[0...10] {
	author-> {name, _id},
	mainImage {
	asset-> {
	url,
	assetId
	}
	},
	slug,
	title,
	categories[]-> {
	_id,
	title
	},
	_id,
	body[] {..., asset-> {
        url, _id
      }},
	_createdAt
  }
  `;
export const ALL_POSTS_QUERY_COUNT = `count(*[_type == "post"] {
	_id,
  }
)`;
export const ALL_CATEGORIES = `*[_type == "category"] {
	title,
	  _id
	}`;
export const PREV_POSTS_QUERY = `*[_type == "post"&& _createdAt > $last_post_createdAt] | order(_createdAt desc)[0...10] {
    author-> {name, _id},
	mainImage {
	asset-> {
	url,
	assetId
	}
	},
	slug,
	title,
	categories[]-> {
	_id,
	title
	},
	_id,
	body[] {..., asset-> {
        url, _id
      }},
	_createdAt
  }
  `;
export const NEXT_POSTS_QUERY = `*[_type == "post"&& _createdAt < $last_post_createdAt] | order(_createdAt desc)[0...10] {
    author-> {name, _id},
	mainImage {
	asset-> {
	url,
	assetId
	}
	},
	slug,
	title,
	categories[]-> {
	_id,
	title
	},
	_id,
	body[] {..., asset-> {
        url, _id
      }},
	_createdAt
  }
  `;
export const PREV_POSTS_QUERY_WITH_CATEGORY_ID = `*[_type == "post" && $_id in categories[]->.title && _createdAt > $last_post_createdAt] | order(_createdAt desc)[0...10] {
    author-> {name, _id},
	mainImage {
	asset-> {
	url,
	assetId
	}
	},
	slug,
	title,
	categories[]-> {
	_id,
	title
	},
	_id,
	body[] {..., asset-> {
        url, _id
      }},
	_createdAt
  }
  `;
export const NEXT_POSTS_QUERY_WITH_CATEGORY_ID = `*[_type == "post" && $_id in categories[]->.title && _createdAt < $last_post_createdAt] | order(_createdAt desc)[0...10] {
    author-> {name, _id},
	mainImage {
	asset-> {
	url,
	assetId
	}
	},
	slug,
	title,
	categories[]-> {
	_id,
	title
	},
	_id,
	body[] {..., asset-> {
        url, _id
      }},
	_createdAt
  }
  `;

export const SEARCH_CONTENT_QUERY = `*[_type == "post" && body[].children[].text match $q || title match $q ] | order(_createdAt desc)[0...10] {
    author-> {name},
    mainImage {
        asset-> {
            url,
        }
    },
    slug,
    title,
    categories[]-> {
        _id,
        title
    },
    _id,
    body[] {..., asset-> {
    url, _id
  }},
    _createdAt
    }
  `;
export const PREV_SEARCH_CONTENT_QUERY = `*[_type == "post" && (body[].children[].text match $q || title match $q) && _createdAt > $last_post_createdAt ] | order(_createdAt desc)[0...10] {
    author-> {name},
    mainImage {
        asset-> {
            url,
        }
    },
    slug,
    title,
    categories[]-> {
        _id,
        title
    },
    _id,
    body[] {..., asset-> {
    url, _id
  }},
    _createdAt
    }
  `;
export const NEXT_SEARCH_CONTENT_QUERY = `*[_type == "post" && (body[].children[].text match $q || title match $q) && _createdAt < $last_post_createdAt ] | order(_createdAt desc)[0...10] {
    author-> {name},
    mainImage {
        asset-> {
            url,
        }
    },
    slug,
    title,
    categories[]-> {
        _id,
        title
    },
    _id,
    body[] {..., asset-> {
    url, _id
  }},
    _createdAt
    }
  `;
export const SEARCH_CONTENT_QUERY_COUNT = `count(*[_type == "post" && body[].children[].text match $q || title match $q ] {
    slug,
    title,
    }
)`;
