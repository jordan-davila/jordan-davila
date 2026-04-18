import React, { Component } from "react";
import ContentContainer from "../components/ContentContainer";
import Main from "../components/Main";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const GROUPS = [
    { key: "featured", label: "Featured" },
    { key: "diageo", label: "Diageo" },
    { key: "galaxy", label: "Galaxy" },
    { key: "personal", label: "Personal" },
];

class Work extends Component {
    groupProjects() {
        return GROUPS
            .map((group) => ({
                ...group,
                projects: window.projects.filter((p) => p.category === group.key),
            }))
            .filter((group) => group.projects.length > 0);
    }

    render() {
        const groups = this.groupProjects();
        return (
            <Main page={"work"}>
                <Nav back="/" page="Work" />
                <ContentContainer>
                    {groups.map((group) => (
                        <section key={group.key} className="group">
                            <h2 className="group-label">{group.label}</h2>
                            {group.projects.map((project, index) => (
                                <Link key={project.slug} to={`/projects/${project.slug}`}>
                                    <div className="label">{project.name}</div>
                                    <div className="num">{String(index + 1).padStart(2, "0")}</div>
                                    <i className="icon-link"></i>
                                </Link>
                            ))}
                        </section>
                    ))}

                    <p className="description">
                        I'm constantly experimenting outside of client work to uncover unique layouts,
                        styles, and interactions, and of late have been taking a lot of inspiration from
                        print design in particular.
                    </p>
                </ContentContainer>
            </Main>
        );
    }
}

export default Work;
