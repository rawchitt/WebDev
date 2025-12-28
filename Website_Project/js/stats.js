// Stats Visualization Module
export class StatsVisualizer {
    constructor() {
        this.init();
    }

    async init() {
        try {
            const response = await fetch('data/stats.json');
            const data = await response.json();
            this.renderCharts(data);
            this.renderAchievements(data.achievements);
        } catch (error) {
            console.error('Error loading stats data:', error);
        }
    }

    renderCharts(data) {
        // Chart 1: Yearly Wins (Bar Chart)
        const winsCtx = document.getElementById('winsChart');
        if (winsCtx) {
            new Chart(winsCtx, {
                type: 'bar',
                data: {
                    labels: data.yearlyWins.labels,
                    datasets: [{
                        label: 'Race Wins',
                        data: data.yearlyWins.data,
                        backgroundColor: 'rgba(0, 217, 255, 0.6)',
                        borderColor: 'rgba(0, 217, 255, 1)',
                        borderWidth: 2,
                        borderRadius: 8,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            borderRadius: 8,
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    }
                }
            });
        }

        // Chart 2: Skill Ratings (Radar Chart)
        const skillsCtx = document.getElementById('skillsChart');
        if (skillsCtx) {
            new Chart(skillsCtx, {
                type: 'radar',
                data: {
                    labels: data.skillRatings.labels,
                    datasets: [{
                        label: 'Skill Rating',
                        data: data.skillRatings.data,
                        backgroundColor: 'rgba(0, 217, 255, 0.2)',
                        borderColor: 'rgba(0, 217, 255, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(0, 217, 255, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(0, 217, 255, 1)',
                        pointRadius: 4,
                        pointHoverRadius: 6,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                stepSize: 20
                            },
                            grid: {
                                color: 'rgba(0, 0, 0, 0.1)'
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    }
                }
            });
        }

        // Chart 3: Career Progression (Line Chart)
        const progressionCtx = document.getElementById('progressionChart');
        if (progressionCtx) {
            new Chart(progressionCtx, {
                type: 'line',
                data: {
                    labels: data.careerProgression.labels,
                    datasets: [{
                        label: 'Championship Points',
                        data: data.careerProgression.points,
                        backgroundColor: 'rgba(0, 217, 255, 0.1)',
                        borderColor: 'rgba(0, 217, 255, 1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        pointBackgroundColor: 'rgba(0, 217, 255, 1)',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            padding: 12,
                            borderRadius: 8,
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(0, 0, 0, 0.05)'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    },
                    animation: {
                        duration: 1500,
                        easing: 'easeInOutQuart'
                    }
                }
            });
        }
    }

    renderAchievements(achievements) {
        const container = document.querySelector('.achievements-grid');
        if (!container) return;

        container.innerHTML = achievements.map(achievement => `
      <div class="achievement-card">
        <div class="achievement-value">${achievement.value}</div>
        <div class="achievement-title">${achievement.title}</div>
        <div class="achievement-description">${achievement.description}</div>
      </div>
    `).join('');
    }
}
