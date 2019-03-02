import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
        { id: 11, name: 'Mr. Nice', pass: '123', email: 'nenor1995@gmail.com', admin: false, avatar: 'assets/img_avatar3.jpg'  },
        { id: 12, name: 'Narco', pass: '123', email: 'nenor1995@gmail.com', admin: false, avatar: 'assets/img_avatar3.jpg'  },
        { id: 13, name: 'Bombasto', pass: '123', email: 'nenor1995@gmail.com', admin: false, avatar: 'assets/img_avatar3.jpg'  },
        { id: 14, name: 'Celeritas', pass: '123', email: 'nenor1995@gmail.com', admin: false, avatar: 'assets/img_avatar3.jpg'  },
        { id: 15, name: 'Magneta', pass: '123', email: 'nenor1995@gmail.com', admin: false, avatar: 'assets/img_avatar3.jpg'  },
        { id: 20, name: 'admin', pass: 'admin', email: 'nenor1995@gmail.com', admin: true, avatar: 'assets/img_avatar3.jpg' }
    ];
    let posts = [
      { id: 1, title: 'naslov 1', descript: 'opis neki', main: 'glavno', comments: 0, user: 11, createdAt: '15-03-18' },
      { id: 2, title: 'naslov 2', descript: 'opis neki', main: 'glavno', comments: 4,  user: 11, createdAt: '15-03-18' },
      { id: 3, title: 'naslov 3', descript: 'opis neki', main: 'glavno', comments: 0, user: 11, createdAt: '15-03-18' },    
      { id: 4, title: 'naslov 4', descript: 'opis neki', main: 'glavno', comments: 0, user: 11, createdAt: '15-03-18' }
    ];
    let comments = [
      { id: 1, postid: 2, comment: 'komentar', user: 11 },
      { id: 2, postid: 2, comment: 'komentar', user: 11 },
      { id: 3, postid: 2, comment: 'komentar', user: 11 },
      { id: 4, postid: 2, comment: 'komentar', user: 11 }
    ];    
    return {users, posts, comments};
  }
}