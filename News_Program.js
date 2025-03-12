class Link {
    constructor(title, url, author) {
        this.title = title;
        this.url = this.formatUrl(url);
        this.author = author;
    }

    formatUrl(url) {
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            return "http://" + url;
        }
        return url;
    }

    toString() {
        return `${this.title} (${this.url}). Author: ${this.author}`;
    }
}

class SocialNews {
    constructor() {
        this.links = [];
    }

    showLinks() {
        if (this.links.length === 0) {
            alert("No links available.");
        } else {
            let linkList = this.links.map((link, index) => `${index + 1}: ${link}`).join("\n");
            alert(linkList);
        }
    }

    addLink() {
        let title = prompt("Enter the link title:");
        let url = prompt("Enter the link URL:");
        let author = prompt("Enter the author name:");

        if (title && url && author) {
            this.links.push(new Link(title, url, author));
            alert("Link added successfully!");
        } else {
            alert("All fields are required!");
        }
    }

    removeLink() {
        if (this.links.length === 0) {
            alert("No links to remove.");
            return;
        }

        let index;
        do {
            index = prompt(`Enter the link number to remove (1-${this.links.length}):`);
            index = parseInt(index, 10);
        } while (isNaN(index) || index < 1 || index > this.links.length);

        this.links.splice(index - 1, 1);
        alert("Link removed successfully!");
    }

    start() {
        let choice;
        do {
            choice = prompt("Choose an action:\n1: Show links\n2: Add a link\n3: Remove a link\n0: Quit");
            switch (choice) {
                case "1":
                    this.showLinks();
                    break;
                case "2":
                    this.addLink();
                    break;
                case "3":
                    this.removeLink();
                    break;
                case "0":
                    alert("Goodbye!");
                    break;
                default:
                    alert("Invalid choice. Please try again.");
            }
        } while (choice !== "0");
    }
}

const app = new SocialNews();
app.start();
