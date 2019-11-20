(this["webpackJsonpmovie-db"]=this["webpackJsonpmovie-db"]||[]).push([[0],{52:function(e,t,a){e.exports=a(64)},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),c=(a(57),a(24)),l=a(14),s=a(25),m=a(26),u=a(28),p=(a(58),a(23)),v=a(21),h=a(66),d=a(93),f=a(83),g=a(46),E=a.n(g),b=function(e){return r.a.createElement("form",{action:"",onSubmit:e.handleSubmit},r.a.createElement(h.a,{elevation:1,style:{padding:"2px 4px",display:"flex",alignItems:"center"}},r.a.createElement(d.a,{autoFocus:!0,onChange:e.handleChange,style:{marginLeft:8,flex:1},placeholder:"Search movie"}),r.a.createElement(f.a,{type:"submit","aria-label":"Search",style:{padding:10}},r.a.createElement(E.a,null))))},y=a(90),k=a(84),F=a(85),S=a(86),O=a(87),j=a(88),P=a(89),I=a(32),C=a.n(I),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={isFavorite:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="N/A"===this.props.poster?"empty_poster.png":this.props.poster,a={Media:{height:345},Card:{width:280,marginTop:10,marginBottom:10,marginLeft:10,marginRigth:10}};return r.a.createElement(k.a,{style:a.Card},r.a.createElement(F.a,{component:p.b,to:"/".concat(this.props.movieId)},r.a.createElement(S.a,{style:a.Media,image:t,title:"poster"}),r.a.createElement(O.a,null,r.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.title))),r.a.createElement(P.a,null,r.a.createElement(y.a,{component:p.b,to:"/".concat(this.props.movieId),size:"small",variant:"contained",color:"primary"},"Detail"),r.a.createElement(f.a,{"aria-label":"add to favorites",onClick:function(){e.setState({isFavorite:!e.state.isFavorite}),e.props.updateFavorites(e.props.movieId,e.props.title,t)}},r.a.createElement(C.a,{color:this.props.checkFavorite(this.props.movieId)?"secondary":"inherit"}))))}}]),t}(n.Component),D=a(91),w=function(e){var t;return"/favorites"===e.match.url?(t=JSON.parse(localStorage.getItem("favoriteMovies")))||(t=[]):t=e.movies,t&&0!==t.length?r.a.createElement(D.a,{cellHeight:345,style:{justifyContent:"center",marginLeft:-10}},t.map((function(t,a){return r.a.createElement(x,{key:a,updateFavorites:e.updateFavorites,checkFavorite:e.checkFavorite,movieId:t.imdbID,poster:t.Poster,title:t.Title})}))):r.a.createElement("h2",null,"No results")},M=function(e){for(var t=[],a=function(a){var n=e.currentPage+0===a?"secondary":"default";t.push(r.a.createElement(y.a,{key:a,color:n,onClick:function(){return e.nextPage(a)}},a))},n=1;n<=e.pages+1;n++)a(n);return r.a.createElement("div",null,r.a.createElement("ul",null,e.currentPage>1?r.a.createElement(y.a,{onClick:function(){return e.nextPage(e.currentPage-1)}},"Prev"):"",t,e.currentPage<e.pages+1?r.a.createElement(y.a,{onClick:function(){return e.nextPage(e.currentPage+1)}},"Next"):""))},T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={movieData:"",isFavorite:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.imdbID;fetch("https://www.omdbapi.com/?apikey=".concat("41453200","&i=").concat(t,"&plot=full")).then((function(e){return e.json()})).then((function(t){t.Response&&e.setState({movieData:t})}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.checkFavorite,n=t.updateFavorites,i=this.state.movieData,o="N/A"===i.Poster?"empty_poster.png":i.Poster,c={Card:{maxWidth:500,margin:"auto"},Media:{height:400,maxWidth:320,margin:"15px auto"},MovieDetails:{color:"blue",align:"left"}},l=["Title","Response","Poster","Plot"],s=a(i.imdbID),m=s?"secondary":"inherit";return r.a.createElement("div",null,r.a.createElement(k.a,{style:c.Card},r.a.createElement(S.a,{src:"picture",style:c.Media,image:o,title:i.Title}),r.a.createElement(O.a,null,r.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"center"},i.Title,r.a.createElement(f.a,{"aria-label":"add to favorites",onClick:function(){e.setState({isFavorite:!s}),n(i.imdbID,i.Title,o)}},r.a.createElement(C.a,{color:m}))),r.a.createElement(j.a,{component:"p",gutterBottom:!0},i.Plot),Object.entries(i).map((function(e,t){return-1===l.indexOf(e[0])?r.a.createElement("div",{key:t},r.a.createElement(j.a,{display:"inline",variant:"body1",style:c.MovieDetails},e[0]+":"),r.a.createElement(j.a,{display:"inline",variant:"body1"}," "+e[1])):null})))))}}]),t}(n.Component),N=a(92),R=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleSubmit=function(t){t.preventDefault(),fetch("https://www.omdbapi.com/?apikey=".concat(e.apiKey,"&s=").concat(e.state.searchTerm)).then((function(e){return e.json()})).then((function(t){t.Response&&e.setState({movies:t.Search,totalResults:t.totalResults})}))},e.handleChange=function(t){e.setState({searchTerm:t.target.value})},e.nextPage=function(t){fetch("https://www.omdbapi.com/?apikey=".concat(e.apiKey,"&s=").concat(e.state.searchTerm,"&page=").concat(t)).then((function(e){return e.json()})).then((function(a){a.Response&&e.setState({movies:a.Search,currentPage:t})}))},e.state={movies:[],searchTerm:"",totalResults:0,currentPage:1},e.apiKey="41453200",e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return t.searchTerm===this.state.searchTerm}},{key:"updateFavorites",value:function(e,t,a){var n=localStorage.getItem("favoriteMovies"),r=[];n&&(r=JSON.parse(n));var i=r.some((function(t){return t.imdbID===e}));if(r&&i){var o=r.filter((function(t){return t.imdbID!==e}));localStorage.setItem("favoriteMovies",JSON.stringify(o))}else r.push({imdbID:e,Title:t,Poster:a}),localStorage.setItem("favoriteMovies",JSON.stringify(r))}},{key:"checkFavorite",value:function(e){var t=JSON.parse(localStorage.getItem("favoriteMovies"));return!!t&&t.some((function(t){return t.imdbID===e}))}},{key:"render",value:function(){var e=this,t=Math.floor(this.state.totalResults/10);return r.a.createElement(p.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"titleBar"},r.a.createElement("div",null,r.a.createElement("img",{alt:"app icon",width:"50",src:"free-movies-icon-21.jpg"})),r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Search")),r.a.createElement("div",null,r.a.createElement(N.a,{title:"Show favorites"},r.a.createElement(y.a,{component:p.b,to:"/favorites",size:"small",variant:"contained",color:"primary"},"Favorites")),r.a.createElement(N.a,{title:"Search movies"},r.a.createElement(y.a,{component:p.b,to:"/",size:"small",variant:"contained",color:"primary"},"Search")))),r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",render:function(a){return r.a.createElement("div",null,r.a.createElement(b,Object.assign({},a,{handleSubmit:e.handleSubmit,handleChange:e.handleChange})),0!==e.state.movies.length&&r.a.createElement(w,Object.assign({},a,{movies:e.state.movies,updateFavorites:e.updateFavorites,checkFavorite:e.checkFavorite})),e.state.totalResults>10?r.a.createElement(M,{pages:t,nextPage:e.nextPage,currentPage:e.state.currentPage}):"")}}),r.a.createElement(v.a,{path:"/favorites",render:function(t){return r.a.createElement("div",null,r.a.createElement(j.a,{variant:"h2",component:"h2",gutterBottom:!0,align:"center"},"Favorite movies"),r.a.createElement(w,Object.assign({},t,{movies:[],updateFavorites:e.updateFavorites,checkFavorite:e.checkFavorite})))}}),r.a.createElement(v.a,{path:"/:imdbID",render:function(t){return r.a.createElement(T,Object.assign({},t,{apiKey:e.apiKey,updateFavorites:e.updateFavorites,checkFavorite:e.checkFavorite}))}}))))}}]),t}(n.Component);o.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.89795610.chunk.js.map