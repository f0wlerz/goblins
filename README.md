# The Goblins' Discord Bot

> Those goblins may be the most evil ones you've never seen. Or the nicest, no way to tell.

A Discord bot built with TypeScript featuring quiz functionality and interactive commands.

It is based upon the awesome work of a friend on his own repo [@Wiibleyde/Eve](https://github.com/Wiibleyde/Eve). Huge props to him. :tada:

## 🚀 Features

- **Quiz System**: Interactive quiz commands with timed gameplay
- **Ping Command**: Check bot latency and response times
- **Button Interactions**: Interactive buttons for enhanced user experience
- **Database Integration**: PostgreSQL database with Prisma ORM
- **Docker Support**: Easy deployment with Docker Compose

## 📋 Commands

### `/quiz`
- **`/quiz launch`** - Start a new quiz
- Interactive quiz system with time limits (8 hours max)
- Embedded responses with custom branding

### `/ping`
- Check bot responsiveness and latency
- Color-coded status indicators based on response time

## 🛠️ Tech Stack

- **TypeScript** - Primary programming language
- **Discord.js v14** - Discord API wrapper
- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Docker** - Containerization
- **ESLint & Prettier** - Code quality and formatting

## 🏗️ Project Structure

```
├── src/
│   ├── main.ts              # Main bot entry point
│   ├── commands/            # Slash commands
│   │   ├── provider.ts      # Command provider
│   │   └── handlers/        # Command implementations
│   ├── buttons/             # Button interactions
│   │   ├── provider.ts      # Button provider
│   │   └── handlers/        # Button implementations
│   └── utils/               # Bot utilities
├── utils/                   # Shared utilities
│   ├── commands/            # Command-specific utilities
│   └── core/                # Core functionality
├── prisma/                  # Database schema
└── docker-compose.yml       # Docker configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS)
- Docker and Docker Compose
- PostgreSQL (if running without Docker)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/f0wlerz/goblins.git
   cd goblins
   ```

2. **Install dependencies**
   ```bash
   npm|bun install
   ```

3. **IMPORTANT - Change the Database password**
   For obvious security reasons, please change the password set in the `docker-compose.yml`.
   ```yaml
    18     POSTGRES_PASSWORD: YouShouldChangeThis!
   ```


4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DISCORD_TOKEN=your_discord_bot_token
   DATABASE_URL=postgresql://goblins:YOURPASSWORD@localhost:5432/goblins_db
   ```

5. **Generate Prisma client**
   ```bash
   npm run generate
   ```

### Running with Docker (Recommended)

```bash
docker-compose up -d
```

### Running locally

1. **Start the database** (if not using Docker)
   ```bash
   # Start PostgreSQL service
   sudo systemctl start postgresql
   ```

2. **Build and start the bot**
   ```bash
   npm run build
   npm start
   ```

## 🔧 Development

### Available Scripts

- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run generate` - Generate Prisma client
- `npm run build` - Build the project
- `npm start` - Start the bot

### Development Workflow

1. Make your changes
2. Run `npm run lint` to check for issues
3. Run `npm run format` to format code
4. Test your changes
5. Build with `npm run build`

## 📝 License

This project is licensed under the GPL-2.0 License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Fowlerz**
- Email: fowlerztwitch@gmail.com
- GitHub: [@f0wlerz](https://github.com/f0wlerz)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📊 Database

The bot uses PostgreSQL with Prisma ORM for data persistence. The database schema is defined in `prisma/prisma.schema`.

## 🐳 Docker

The project includes Docker configuration for easy deployment:
- **Bot container**: Runs the Discord bot
- **Database container**: PostgreSQL database
- **Volumes**: Persistent log storage

## ⚙️ Configuration

The bot configuration is managed through environment variables and the core configuration system located in `utils/core/config.ts`.