class Story {
    title;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = []
    }

    get likes() {
        if (this._likes.length <= 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw Error(`You can't like the same story twice!`)
        }
        if (this.creator === username) {
            throw Error(`You can't like your own story!`)
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }

    dislike(username) {
        if (!(this._likes.includes(username))) {
            throw Error(`You can't dislike this story!`)
        }
        this._likes = this._likes.filter(el => el !== username)
        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {
        if (id === undefined) {
            this._comments.push({
                id: this._comments.length + 1,
                username,
                content,
                replies: []
            })
            return `${username} commented on ${this.title}`
        }

        if (id > this._comments.length) {
            this._comments.push({
                id: this._comments.length + 1,
                username,
                content,
                replies: []
            })
            return `${username} commented on ${this.title}`
        }
        for (let obj of this._comments) {
            if (obj.id === id) {
                obj.replies.push({
                    id: `${obj.id}.`+ `${obj.replies.length + 1}`,
                    username,
                    content
                })
                return `You replied successfully`
            }
        }

    }

    toString(sortingType) {
        if (sortingType === 'asc') {
            this._comments.sort((a, b) => a.id- b.id)
            for (let el of this._comments) {
                el.replies.sort((a, b) => a.id - b.id)
            }

        } else if (sortingType === 'desc') {
            this._comments.sort((a, b) => b.id - a.id)
            for (let obj of this._comments) {
                obj.replies.sort((a, b) => b.id - a.id)
            }

        } else if (sortingType === 'username') {
            this._comments.sort((a, b) => a.username.localeCompare(b.username))
            for (let obj of this._comments) {
                obj.replies.sort((a, b) => a.username.localeCompare(b.username))
            }

        }


        let result = [];
        result.push(`Title: ${this.title}`)
        result.push(`Creator: ${this.creator}`)
        result.push(`Likes: ${this._likes.length}`)
        result.push('Comments:')

        for (let com of this._comments) {
            result.push(`-- ${com.id}. ${com.username}: ${com.content}`)
            if (com.replies.length > 0) {
                for (let repCom of com.replies) {
                    result.push(`--- ${repCom.id}. ${repCom.username}: ${repCom.content}`)
                }
            }
        }
        return result.join('\n').trim()

    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));