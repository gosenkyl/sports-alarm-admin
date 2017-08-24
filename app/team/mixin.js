import Ember from 'ember';

let {
  Mixin,
  computed,
  get,
  isEmpty
  } = Ember;

export default Mixin.create({

  isLocalImages: false,

  teamName: computed("city", "mascot", function(){
    return `${get(this, "city")} ${get(this, "mascot")}`;
  }),

  originTeamName: computed("originCity", "originMascot", function(){
    return `${get(this, "originCity")} ${get(this, "originMascot")}`;
  }),

  imageURL: computed("image", "league", function(){
    let imageNotFound = "/assets/images/no-image-found.png";

    let imageName = get(this, "image");

    if(isEmpty(imageName)){
      return imageNotFound;
    }

    if(get(this, "isLocalImage")){
      return `/assets/images/${imageName}.png`;
    } else {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/${get(this, "league.id").toLowerCase()}/500/${imageName}.png&h=150&w=150`;
    }

  })

});
