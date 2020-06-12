import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

    return (
<div className="ui container comments">
    <ApprovalCard>
        <CommentDetail 
        author ="Sam" timeAgo="Today at 6:00PM" 
        text = "Hi !!"
        avatar={Faker.image.avatar()}
        />
        </ApprovalCard>
        <ApprovalCard> <CommentDetail author ="Alex" timeAgo="Today at 5:00PM" text = "How are you??" avatar={Faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author ="Jen" timeAgo="Yesterday at 6:00PM" text="What's up!" avatar={Faker.image.avatar()}></CommentDetail>
        </ApprovalCard>
</div>
        );
}

ReactDOM.render(<App></App> , document.querySelector("#root"));

