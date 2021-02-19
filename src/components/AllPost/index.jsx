import React,{useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const AllPost = () => {

  const [arrayPost, setArrayPost] = useState([]);
  const cookie = Cookies.get('jwt');
  //const getCurrentUser = (state) => state.userFetch;


  useEffect(() => {
    const FetchPost = () => {
      fetch(`http://localhost:1337/posts`, {
        method: 'get',
        headers: {
          // 'Authorization': `Bearer ${cookie}`,
          'Content-Type': 'application/json'
        },
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("response : ",response);
        setArrayPost(response);
      })
      .catch((err) => console.log(err));
    }
    FetchPost();
  }, []);


  return (

    <>
    {arrayPost.map( (post) =>
      <div className="card gedf-card" key={post.id}>
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""/>
              </div>
              <div className="ml-2">
              <div className="h5 m-0">@{post.user.username}</div>
                <div className="h7 text-muted">{post.user.username}</div>
              </div>
            </div>
            <div>
                <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="/#">Save</a>
                  <a className="dropdown-item" href="/#">Hide</a>
                  <a className="dropdown-item" href="/#">Report</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>{post.created_at}</div>
          <a className="card-link" href="/#">
            <h5 className="card-title">{post.id}</h5>
          </a>

          <p className="card-text">
            {post.text}
          </p>
        </div>
        <div className="card-footer">
          <a href="/#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
          <a href="/#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
          <a href="/#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
        </div>
      </div>
    )}
  </>
  );
};

export default AllPost;







      // <Container>
      //   {arrayPost.map( (post) =>
      //     <div>
      //     blabla
      //       <Card style={{ width: '18rem' }}>
      //       <Card.Title> {post.user.username}</Card.Title>
      //       <Card.Body>
      //         <Card.Text>
      //           {post.text}
      //         </Card.Text>
      //         <Card.Subtitle className="mb-2 text-muted">{post.created_at}</Card.Subtitle>
      //       </Card.Body>
      //       </Card>
      //     </div>
      //   )}
      // </Container>
