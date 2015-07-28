Template.categoryItem.helpers({
  categoryLink: function() {
    console.log(Categories.getUrl(this.slug));
    return Categories.getUrl(this.slug);
  }
});