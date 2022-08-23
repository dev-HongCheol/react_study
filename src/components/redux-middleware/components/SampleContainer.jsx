import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from './Sample';
import { getUsers, getPost } from '../moudle/sample';

function SampleContainer({
  getPost, getUsers, post, users, loadingPost, loadingUsers,
}) {
  useEffect(() => {
    const fn = async () => {
      try {
        console.log('useEffect');
        getPost(1);
        getUsers();
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
}

export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USERS,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS'],
  }),
  {
    getPost,
    getUsers,
  },
)(SampleContainer);
