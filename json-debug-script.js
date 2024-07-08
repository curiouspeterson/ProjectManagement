function debugJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    console.log("JSON is valid");
  } catch (e) {
    console.log("Error message:", e.message);
    const lines = jsonString.split('\n');
    const lineNumber = parseInt(e.message.match(/line (\d+)/)[1]);
    const columnNumber = parseInt(e.message.match(/column (\d+)/)[1]);
    console.log("Problematic line:", lines[lineNumber - 1]);
    console.log("Error at:", "^".padStart(columnNumber));
  }
}

// Usage:
// 1. Copy the entire content of your projectManagementData.json file
// 2. Replace 'your_json_string_here' with the copied content
// 3. Run this script in your browser's console
debugJSON('{
  "AgileProjectManagementForDesignTeams": [
    {
      "stage": "Project Initiation",
      "subStages": [
        {
          "name": "Define project goals and objectives",
          "content": [
            {
              "task": "Conduct a stakeholder meeting to gather requirements",
              "instructions": "Organize a meeting with key stakeholders to collect their requirements and expectations for the project."
            },
            {
              "task": "Create a project charter outlining the project's purpose and scope",
              "instructions": "Develop a project charter document that defines the project's purpose, scope, and key deliverables."
            },
            {
              "task": "Define key performance indicators (KPIs) for project success",
              "instructions": "Establish measurable KPIs that will be used to evaluate the project's success."
            }
          ]
        },
        {
          "name": "Form the design team",
          "content": [
            {
              "task": "Identify necessary roles and skills",
              "instructions": "Determine the roles and skills required for the project and identify suitable team members."
            },
            {
              "task": "Assign team members based on expertise and availability",
              "instructions": "Assign team members to roles based on their expertise and availability for the project."
            },
            {
              "task": "Conduct a team kickoff meeting to align on project goals",
              "instructions": "Hold a kickoff meeting with the team to discuss project goals and align on the plan."
            }
          ]
        },
        {
          "name": "Set up project infrastructure",
          "content": [
            {
              "task": "Choose and set up project management tools (e.g., Jira, Trello)",
              "instructions": "Select appropriate project management tools and set them up for the team to use."
            },
            {
              "task": "Establish communication channels (e.g., Slack, Microsoft Teams)",
              "instructions": "Set up communication channels to facilitate collaboration among team members."
            },
            {
              "task": "Create a shared design system or resource library",
              "instructions": "Develop a shared design system or resource library for the team to use during the project."
            }
          ]
        }
      ]
    },
    {
      "stage": "Sprint Planning",
      "subStages": [
        {
          "name": "Create and prioritize the product backlog",
          "content": [
            {
              "task": "Collaborate with stakeholders to gather user stories",
              "instructions": "Work with stakeholders to collect user stories and requirements for the product backlog."
            },
            {
              "task": "Use techniques like MoSCoW (Must have, Should have, Could have, Won't have) for prioritization",
              "instructions": "Prioritize backlog items using the MoSCoW method to determine their importance."
            },
            {
              "task": "Break down larger tasks into smaller, manageable items",
              "instructions": "Decompose larger tasks into smaller, more manageable items that can be completed within a sprint."
            }
          ]
        },
        {
          "name": "Estimate effort for backlog items",
          "content": [
            {
              "task": "Use story points or time-based estimates",
              "instructions": "Estimate the effort required for each backlog item using story points or time-based estimates."
            },
            {
              "task": "Conduct planning poker sessions for team estimation",
              "instructions": "Hold planning poker sessions with the team to collaboratively estimate the effort for each item."
            },
            {
              "task": "Consider design complexity and potential technical challenges",
              "instructions": "Take into account the complexity of the design and any potential technical challenges when estimating effort."
            }
          ]
        },
        {
          "name": "Plan the sprint",
          "content": [
            {
              "task": "Select items from the product backlog for the sprint",
              "instructions": "Choose backlog items to include in the sprint based on their priority and the team's capacity."
            },
            {
              "task": "Define sprint goals and objectives",
              "instructions": "Set clear goals and objectives for the sprint that align with the overall project vision."
            },
            {
              "task": "Create a sprint backlog with specific tasks and assignments",
              "instructions": "Develop a sprint backlog that includes specific tasks and assignments for the team."
            }
          ]
        }
      ]
    },
    {
      "stage": "Design and Development",
      "subStages": [
        {
          "name": "Daily stand-up meetings",
          "content": [
            {
              "task": "Conduct brief (15-minute) daily meetings",
              "instructions": "Hold daily stand-up meetings to discuss progress, plans, and any blockers."
            },
            {
              "task": "Each team member shares progress, plans, and blockers",
              "instructions": "During the stand-up, each team member shares their progress, plans for the day, and any obstacles they are facing."
            },
            {
              "task": "Update task status on the sprint board",
              "instructions": "Update the status of tasks on the sprint board to reflect current progress."
            }
          ]
        },
        {
          "name": "Design iteration",
          "content": [
            {
              "task": "Create low-fidelity wireframes or prototypes",
              "instructions": "Develop low-fidelity wireframes or prototypes to visualize the design concepts."
            },
            {
              "task": "Conduct internal design reviews",
              "instructions": "Hold internal reviews of the design to gather feedback and identify areas for improvement."
            },
            {
              "task": "Refine designs based on feedback",
              "instructions": "Make adjustments to the designs based on feedback received during internal reviews."
            }
          ]
        },
        {
          "name": "User testing and feedback",
          "content": [
            {
              "task": "Recruit participants for usability testing",
              "instructions": "Find and recruit participants to take part in usability testing sessions."
            },
            {
              "task": "Conduct user interviews or surveys",
              "instructions": "Perform user interviews or surveys to collect feedback on the design."
            },
            {
              "task": "Analyze feedback and incorporate insights into designs",
              "instructions": "Analyze the feedback from users and incorporate the insights into the design to improve it."
            }
          ]
        },
        {
          "name": "Collaboration with development team",
          "content": [
            {
              "task": "Maintain open communication channels with developers",
              "instructions": "Keep communication channels open with the development team to ensure smooth collaboration."
            },
            {
              "task": "Provide design specifications and assets",
              "instructions": "Deliver design specifications and assets to the development team to guide implementation."
            },
            {
              "task": "Address any technical constraints or limitations",
              "instructions": "Work with developers to address any technical constraints or limitations that arise during development."
            }
          ]
        }
      ]
    },
    {
      "stage": "Sprint Review and Retrospective",
      "subStages": [
        {
          "name": "Prepare for sprint review",
          "content": [
            {
              "task": "Compile completed work and demonstrations",
              "instructions": "Gather all completed work and prepare demonstrations for the sprint review."
            },
            {
              "task": "Create a presentation of sprint achievements",
              "instructions": "Develop a presentation that highlights the achievements and progress made during the sprint."
            },
            {
              "task": "Identify any incomplete items and reasons for non-completion",
              "instructions": "Identify any items that were not completed and document the reasons for their non-completion."
            }
          ]
        },
        {
          "name": "Conduct sprint review",
          "content": [
            {
              "task": "Present completed work to stakeholders",
              "instructions": "Showcase the completed work to stakeholders during the sprint review meeting."
            },
            {
              "task": "Gather feedback on designs and functionality",
              "instructions": "Collect feedback from stakeholders on the designs and functionality delivered during the sprint."
            },
            {
              "task": "Update the product backlog based on new insights",
              "instructions": "Adjust the product backlog based on the feedback and insights gathered during the sprint review."
            }
          ]
        },
        {
          "name": "Hold sprint retrospective",
          "content": [
            {
              "task": "Reflect on what went well and what could be improved",
              "instructions": "Discuss with the team what went well during the sprint and identify areas for improvement."
            },
            {
              "task": "Use techniques like Start-Stop-Continue or 4Ls (Liked, Learned, Lacked, Longed For)",
              "instructions": "Apply retrospective techniques such as Start-Stop-Continue or the 4Ls method to facilitate the discussion."
            },
            {
              "task": "Identify actionable improvements for the next sprint",
              "instructions": "Pinpoint specific, actionable improvements that can be implemented in the next sprint."
            }
          ]
        }
      ]
    },
    {
      "stage": "Continuous Improvement",
      "subStages": [
        {
          "name": "Refine the design process",
          "content": [
            {
              "task": "Implement improvements identified in retrospectives",
              "instructions": "Put into practice the improvements that were identified during the sprint retrospectives."
            },
            {
              "task": "Regularly update the design system or resource library",
              "instructions": "Keep the design system or resource library up-to-date with the latest best practices and assets."
            },
            {
              "task": "Conduct periodic team skills assessments and training",
              "instructions": "Regularly assess the skills of the team and provide training to address any gaps or to enhance capabilities."
            }
          ]
        },
        {
          "name": "Monitor and adapt",
          "content": [
            {
              "task": "Track project progress using burndown charts or cumulative flow diagrams",
              "instructions": "Use tools like burndown charts or cumulative flow diagrams to monitor the project's progress."
            },
            {
              "task": "Adjust sprint length or team composition as needed",
              "instructions": "Modify the length of sprints or the composition of the team based on the project's needs and challenges."
            },
            {
              "task": "Regularly reassess project goals and priorities",
              "instructions": "Periodically review and adjust project goals and priorities to ensure they remain aligned with overall objectives."
            }
          ]
        },
        {
          "name": "Foster a culture of innovation",
          "content": [
            {
              "task": "Encourage experimentation and creative problem-solving",
              "instructions": "Promote a culture where team members feel empowered to experiment and find creative solutions to problems."
            },
            {
              "task": "Allocate time for design exploration and research",
              "instructions": "Set aside time for the team to engage in design exploration and research activities."
            },
            {
              "task": "Share learnings and best practices within the team and organization",
              "instructions": "Facilitate the sharing of learnings and best practices within the team and across the organization."
            }
          ]
        }
      ]
    }
  ]
}
');
