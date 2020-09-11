import config from './config';

const HogwartsApiService = {
  addStudent() {
    return fetch(`${config.API_ENDPOINT}/students`, {
      headers: {},
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  // getResource(studentId) {
  //   return fetch(`${config.API_ENDPOINT}/students/${studentId}`, {
  //     headers: {
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     );
  // },
  removeStudent(studentId) {
    return fetch(`${config.API_ENDPOINT}/students/${studentId}`, {
      method: 'DELETE',
      headers: {
      },
    })
      .then(res => {
        if (!res.ok)
          Promise.reject(res);
      });
  },
  post(
    studentId,
    pronouns,
    pet,
    wandType,
    wandCore,
    favoriteSubject,
    house
  ) {
    return fetch(`${config.API_ENDPOINT}/students`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        id,
        pronouns,
        pet,
        wandtype: wandType,
        wandcore: wandCore,
        favoritesubject: favoriteSubject,
        house
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  // patchStudent(
  //   id,
  //   pronouns,
  //   pet,
  //   wandtype,
  //   wandcore,
  //   favoritesubject,
  //   house
  // ) {
  //   return fetch(`${config.API_ENDPOINT}/students/edit/${studentId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id,
  //       pronouns,
  //       pet,
  //       wandtype: wandType,
  //       wandcore: wandCore,
  //       favoritesubject: favoriteSubject,
  //       house
  //     }),
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     );
  // }
};

export default HogwartsApiService;