var listaFilmes = [
   'https://m.media-amazon.com/images/I/51MXJq8bsnL.jpg',

   'https://conteudo.imguol.com.br/c/entretenimento/65/2021/12/14/cartaz-de-homem-aranha-sem-volta-para-casa-1639517284758_v2_3x4.jpg',

   'https://m.media-amazon.com/images/M/MV5BNzg5ZGFjYTMtYmU3My00NTE0LThiNTctMmJjZWY5NGQ2N2U5XkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg',

   "https://wp.ufpel.edu.br/empauta/files/2018/05/GuerraInfinitacartaz.jpg",

   'https://cinemacomrapadura.com.br/imagens/2018/07/20180704-mission-impossible-fallout-poster-410x615.jpg',

   "https://br.web.img3.acsta.net/pictures/17/03/03/19/15/268212.jpg",

   "https://upload.wikimedia.org/wikipedia/pt/b/b7/Fireproof_poster.jpg",

   "https://upload.wikimedia.org/wikipedia/pt/4/48/Kong-Skull_Island.jpg",

   "https://media.fstatic.com/brIK6EcMAmArVQOtPk0Um62c0Is=/210x312/smart/filters:format(webp)/media/movies/covers/2011/06/9470ad45102b2ba2fa90af73e8c9748c_1.jpg",

   "https://br.web.img3.acsta.net/pictures/19/10/18/16/49/5592014.jpg",

   "https://br.web.img2.acsta.net/pictures/23/01/10/16/05/4289829.jpg",

   "https://cinema10.com.br/upload/filmes/filmes_11149_velozes-e-furiosos-10-poster-nacional.jpg?default=poster",

   "https://i.pinimg.com/originals/18/7d/7c/187d7c94e0ce8c191c8166c024425937.jpg",

   "https://br.web.img2.acsta.net/medias/nmedia/18/90/80/64/20363523.jpg",

   "https://static.wikia.nocookie.net/filmes/images/1/1f/Godzilla-new-poster.jpg",

   "https://play-lh.googleusercontent.com/xn9qXXG1GEJpEEsHtRHkhF1fgdhWIkiNKVZSUlJV6YiXVbxm0NRJZ0aAjxLxqsWVxqoh",
   
   "https://br.web.img2.acsta.net/c_310_420/pictures/21/08/05/10/09/3049342.jpg",

   "https://play-lh.googleusercontent.com/pSgwFrp-tMMwk_iSO188jvg2VILhq1l3EICZKThh72bi8J8ozzD4JjMcd4fVVHMcoimq",

   "https://upload.wikimedia.org/wikipedia/pt/thumb/f/ff/Alice-In-Wonderland-Theatrical-Poster.jpg/250px-Alice-In-Wonderland-Theatrical-Poster.jpg",

   "https://upload.wikimedia.org/wikipedia/pt/7/71/Extraction_2.jpg",

   "https://m.media-amazon.com/images/I/91TzLoWLtqL._AC_UF894,1000_QL80_.jpg",

   "https://musicart.xboxlive.com/7/28f95d00-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",

   "https://musicart.xboxlive.com/7/70b85000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",

   "https://play-lh.googleusercontent.com/DBLnyRbxMaS7ijAYIONV-HzfIX2vgTma9_QZEIk_9CzjMNKdNXPYRr4CyTnYwAAz2PODvjfr25kWmZinSavd",

   "https://upload.wikimedia.org/wikipedia/pt/thumb/4/40/Movie_poster_toy_story_2.jpg/250px-Movie_poster_toy_story_2.jpg",

   "https://media.fstatic.com/jNZXpFXkeOyRUmFGzHBZC__vIy0=/322x478/smart/filters:format(webp)/media/movies/covers/2023/08/cats_IvsmbSx.jpg",

   "https://play-lh.googleusercontent.com/W8DR-RL0aRUJjFlvViEkk9pmzaa-iZFlQpmPO1Hm0-10Q0mzLHspjoBH64PD3l0eGwbo",
 
   "https://upload.wikimedia.org/wikipedia/pt/1/1a/O_Jogo_da_Imita%C3%A7%C3%A3o.jpg",

   "https://br.web.img3.acsta.net/medias/nmedia/18/87/30/40/20028676.jpg",

   "https://upload.wikimedia.org/wikipedia/pt/e/e5/Frozen_2013.png",

   "https://play-lh.googleusercontent.com/omRtvzKeZrzBPdwJbaUEYgEjolk3goZlvfrzmopISK25J_AAXn2a47tCU4HVWdyM7hUBLA",
  
   'https://upload.wikimedia.org/wikipedia/en/9/9a/The_Raid_2011_poster.jpg'
];

var container = document.querySelector('.image-container');

for (var i = 0; i < listaFilmes.length; i++) {
  var img = document.createElement('img');
  img.src = listaFilmes[i];
  container.appendChild(img);
}

