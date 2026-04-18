import React, { Component } from "react";
import Main from "../components/Main";
import ContentContainer from "../components/ContentContainer";
import Nav from "../components/Nav";
import Seo from "../components/Seo";
import _ from "lodash";

class Projects extends Component {
	componentWillMount() {
		let project = _.find(window.projects, this.props.match.params);
		this.setState(project);
	}

	getMedia() {
		return this.state.images.map((filename) => {
			const src = `/images/${this.state.image_path}/${filename}`;
			const ext = filename.split(".").pop().toLowerCase();
			const isVideo = ext === "mp4" || ext === "webm" || ext === "mov";
			return { src, isVideo, ext };
		});
	}

	render() {
		return (
			<Main page={"projects"}>
				<Seo
					title={this.state.name}
					description={this.state.description}
				/>
				<Nav back="/work" page="Projects" />
				<ContentContainer>
					<div className="project-info">
						<h1>{this.state.name}</h1>
						<section className="info">
                            <div className="tech">
                                <h2>TECH</h2>
                                {this.state.tags.map((tag, index) => {
                                    return <h3 key={index}>{tag}</h3>

                                })}
                            </div>
							<div className="description">
								<div className="title-year">
                                    <h2>DESCRIPTION</h2>
                                    <h2>{this.state.year}</h2>
                                </div>
								<p>{this.state.description}</p>
							</div>
						</section>
                        <section className="links">
                            {this.state.links.map((link, index) => {
                                // eslint-disable-next-line react/jsx-no-target-blank
                                return <a key={index} href={link.url} target="_blank" className={`link ${link.classColor}`}>
                                    <div className="label">{link.name}</div>
                                    <div className="icon-link"></div>
                                </a>
                            })}
                        </section>
					</div>

                    {this.state.images.length ? (
                        <div className="images">
                            {this.getMedia().map(({ src, isVideo, ext }) => (
                                isVideo ? (
                                    <video
                                        key={src}
                                        src={src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                ) : (
                                    <img alt="" key={src} src={src} />
                                )
                            ))}
					    </div>
                    ) : (null)}

				</ContentContainer>
			</Main>
		);
	}
}

export default Projects;
