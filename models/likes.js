export default class User extends Model {
    constructor()
    {
        super(true);
        this.addField('userId', 'integer');
        this.addField('postId', 'integer');
       
    }

    
}