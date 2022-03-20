const app = document.getElementById("app");
				const client = algoliasearch('HA5QLSQEEG', '6ba3d86a4df6ee42eccf44abe2ef5720');
				const index = client.initIndex('test_Dictionary');
				
				index.search("").then(result =>{
					const hits = result.hits.map( hit => `<p>${hit.firstname}</p>`);
					app.innerHTML = hits.join("");
				
				});