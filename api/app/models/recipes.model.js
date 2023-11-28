module.exports = mongose => {
    var schema = mongose.Schema(
        {
            name: String,
            description: String,
            instructions: String,
            published: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Recipe = mongose.model("recipe", schema);
    return Recipe;
}
