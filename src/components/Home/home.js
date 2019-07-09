import React, { Component } from 'react';
import './home.css';
import StarRatings from 'react-star-ratings';
import Arrow from '../../assets/arrow2.png';
import { connect } from 'react-redux';
import {getData} from '../../actions/getData'

class Home extends Component {
	constructor () {
		super()
		this.state = {
			editors: [],
			articles: [],
			reviews: []
		}
	}

	componentDidMount () {
		this.getData()
	}

	getData () {
		this.props.getData().then(res => {
			this.setState({
				editors: res["editor's choice"],
				articles: res["latest articles"],
				reviews: res["latest review"]
			});
		});
	}

	render () {
		return (
			<div>
				<div className="menu d-none d-md-flex d-lg-block border-bottom">
					<ul className="menu_list d-flex justify-content-center">
						<li>SKINCARE</li>
						<li>MAKE UP</li>
						<li>HAIR</li>
						<li>FRAGANCE</li>
						<li>NAILS</li>
						<li>TOOLS</li>
						<li>BRANDS</li>
					</ul>
				</div>
				<div className="container">
					<div className="banner">
						<div className="banner_small d-flex justify-content-center align-items-center">
							<h6 className="frame">TOP FRAME banner</h6>
						</div>
						<div className="banner_height d-flex justify-content-center align-items-center">
							<h5 className="frame">BILLBOARD banner</h5>
						</div>
					</div>
				</div>
				<div className="container my-5">
					<div className="list_editor">
						<h2>Editor's Choice</h2>
						<p>Curated with love</p>
					</div>
					<div className="row m-0 p-lg-0 d-lg-flex justify-content-between">
						{this.state.editors.map((editor, i) => {
							return (
								<div className="col-6 col-md col-lg p-0 m-0" key={i}>
									<div className="list_profile_editor d-flex">
										<div className="list_img">
											<img src={ editor.product.image } alt="" />
										</div>
										<div className="list_name">
											<p>{editor.editor}</p>
											<p className="list_name_role">{editor.role}</p>
										</div>
									</div>
									<div className="card_list border rounded">
										<div className="card_img">
											<img src={editor.product.image} alt="" />
										</div>
										<div className="list_detail">
											<div className="font-weight-bold d-flex mb-3">
											<h6 className="m-0 mr-1 align-self-center font-weight-bold">
												{editor.product.rating}
											</h6>
											<StarRatings rating={editor.product.rating} starRatedColor="red" name="rating" starDimension="15px" starSpacing="0px" />

											</div>
											<h6 className="font-weight-bold">{editor.product.name}</h6>
											<p>{editor.product.description}</p>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<div className="banner_pink mb-5 d-none d-md-block d-lg-block"></div>
				<div className="container mb-5">
					<div className="banner">
						<div className="banner_center d-flex justify-content-center align-items-center">
							<h5 className="frame">BILLBOARD banner</h5>
						</div>
					</div>
				</div>
				<div className="container mb-5">
					<div className="list_articles">
						<h2>Latest Articles</h2>
						<p>Unravel more beauty</p>
					</div>
					<div className="text-right mb-5">
						<span className="text-right text-danger see_more_text">See more<img src={Arrow} className="ml-3" alt="" /></span>
					</div>
					<div className="row">
						{this.state.articles.map((article, i) => {
							return (
								<div key={i} className="col-12 col-md-4 col-lg-4 mb-0 mb-lg-4 article">
									<div className="article_img rounded">
										<img src={article.image} className="rounded" alt="" />
									</div>
									<div className="mt-3 title_article">
										<h5 className="font-weight-bold">{article.title}</h5>
										<span className="d-flex">{article.author} | <p className="ml-2 m-0 published_text">{article.published_at}</p></span>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<div className="container mb-5">
					<div className="list_review">
						<h2>Latest Reviews</h2>
						<p>So you can make better purchase decision</p>
					</div>
					<div className="text-right mb-5">
						<span className="text-right text-danger see_more_text">See more<img src={Arrow} className="ml-3" alt="" /></span>
					</div>
					<div className="card_review d-block d-md-flex d-lg-flex ">
						{this.state.reviews.map((review, i) => {
							return (
								<div key={i} className="col mb-3 mb-lg-0 pr-0 pr-lg-3 p-0">
									<div className="card_list_review p-3">
										<div className="d-flex align-items-center border-bottom">
											<div className="mr-3">
												<img src={review.product.image} className="img_review" alt="" />
											</div>
											<div className="card_review_name">
												<h6 className="mb-1 font-weight-bold">{review.product.name}</h6>
												<p className='m-0'>{review.product.desc}</p>
											</div>
										</div>
										<div>
											<div className="my-2">
												<StarRatings rating={review.star} starRatedColor="red" name="rating" starDimension="15px" starSpacing="0px" />
											</div>
											<p className="m-0">{review.comment}</p>
										</div>
									</div>

									<div className="d-flex align-items-center m-0 profile_review">
										<div className="profile_img">
											<img src={review.product.image} className="img_review" alt="" />
										</div>
										<div className="col text-center">
											<p className="font-weight-bold user_review m-0 mt-2">{review.user}</p>
											<div className="title_profile d-flex justify-content-center">
												{review.profile.map((profile, j) => {
													return (
														<p className="m-0 pr-1" key={j}>{profile}</p>
													)
												})}
											</div>
										</div>
									</div>

								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null, {getData})(Home);