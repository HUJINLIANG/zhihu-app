import React from 'react'
import { convertImageUrl } from '../helpers/utils'

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Colors from 'material-ui/styles/colors';

const styles = {
	container: {
		display: 'flex',
		alignItems: 'center'
	}
}

const StoryListItem = ({
	story,
	onClick
}) => {
	// const imageUrl = story.images ? convertImageUrl(story.images[0]) : convertImageUrl(story.thumbnail)

    var imageUrl = "";
    if(story.thumbnail){
        imageUrl = convertImageUrl(story.thumbnail)
    }else if(story.images){
        imageUrl = convertImageUrl(story.images[0])
    }
    const id = story.id||story.news_id
	return (
		<div onClick={onClick.bind(null, id)}>
			<ListItem
		      leftAvatar={<Avatar src={imageUrl} />}
		      primaryText={story.title} />
		    <Divider inset={true} />
		</div>
	)
}

export default StoryListItem