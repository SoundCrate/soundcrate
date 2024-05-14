const db = {
    "user": [
        {
            "id": 1,
            "username": "janedoe",
            "email": "jane@email.com",
            "password": "janepass"
        },
        {
            "id": 2,
            "username": "annesa",
            "email": "annesa@email.com",
            "password": "annesapass"
        }
    ],

    "review": [
        {
            "id": 1,
            "user_id": 1,
            "song_id": "4VD0uDvoaqXu0t706SA4hB",
            "album_id": "7EMoYQ7QghVnHSsdNLWv5P",
            "rating": 4,
            "review_text": "on repeat woww"
        },
        {
            "id": 2,
            "user_id": 1,
            "song_id": "5Xhsf1DLA9j2pVyCbqjkLh",
            "album_id": "71Q44PCgBGD6QyxI12jJNy",
            "rating": 5,
            "review_text": "soo amazing! her best work tbh!"
        }
    ],

    "review_like": [
        {
            "user_id": 2,
            "review_id": 1
        }
    ],

    "list": [
        {
            "id": 1,
            "user_id": 1,
            "name": "My Favorites",
            "description": ""
        },
        {
            "id": 2,
            "user_id": 1,
            "name": "2000s",
            "description": "hits from the 2000's"
        }
    ],

    "list_song": [
        {
            "list_id": 1,
            "song_id": "5Xhsf1DLA9j2pVyCbqjkLh"
        },
        {
            "list_id": 1,
            "song_id": "4VD0uDvoaqXu0t706SA4hB"
        },
    ]


}

export default db