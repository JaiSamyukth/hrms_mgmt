# HR Management System
Professional all-in-one Single-Page Application to manage employee attendance, leaves, payrolls, and organize your organization's branches and departments.

Built with Laravel 10, Vue 3, Inertia.js, and Tailwind CSS featuring a modern **Neutral Dark + Calm Accent** theme.

## Installation

### Pre-requisites
- PHP 8.2
- Composer
- PostgreSQL Server (not tested on MySQL)
- Cron (for scheduled tasks)
- npm

```bash
git clone https://github.com/JaiSamyukth/hrms_mgmt.git
cd hrms_mgmt
composer install
cp .env.example .env
```

Then open `.env` file and fill in your database and SMTP credentials (for automatic Emails). 
Also, set `QUEUE_CONNECTION=database` for queues.

After that:
```bash
php artisan key:generate
```

To generate basic data needed to start the system, run the migrations and starter seeder:
```bash
php artisan migrate --seed --seeder=StarterSeeder
```

Alternatively, if you want to populate the application with dummy data for testing:
```bash
php artisan migrate --seed --seeder=DatabaseSeeder
```

Add this entry in your cron file:
```bash
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

_If you don't know how to add a cron job, please consult: [Setting Up a Cron Job](https://phoenixnap.com/kb/set-up-cron-job-linux#setting-up-a-cron-job)_

You also need to run queue worker:
```bash
php artisan queue:work
```

For Vue Dependencies:
```bash
npm install
npm run build
```

The project should be ready to go now. You can use `php artisan serve` and head to `localhost:8000` to view the project.

For production deployment, please consult the [Laravel Documentation](https://laravel.com/docs/deployment).

## Features

### Core Functionality
- ✅ **Multi-role Support** - Admin and employee roles with appropriate permissions
- ✅ **Organization Structure** - Manage branches, departments, and positions
- ✅ **Employee Management** - Track positions, salaries, personal information, and employment history
- ✅ **Attendance System** - Self-service attendance with IP-based verification option
- ✅ **Automatic Time Tracking** - Calculates work hours, overtime, and undertime based on shifts
- ✅ **Payroll Generation** - Automatic payroll with review and override capabilities
- ✅ **Employee Evaluation** - Weighted point system for performance evaluation affecting salary
- ✅ **Email Notifications** - Automatic payroll emails upon approval
- ✅ **Request Management** - Employee requests for leaves and complaints with admin approval workflow
- ✅ **Calendar Integration** - Meetings, events, holidays, and leave tracking
- ✅ **Attendance Dashboard** - Year-round attendance tracking for employees
- ✅ **Smart Absence Tracking** - Automatically accounts for holidays and weekends

### UI/UX Features
- ✅ **Single-Page Application** - Smooth, modern user experience
- ✅ **Professional Dark Theme** - Neutral Dark + Calm Accent design with blue (#3B82F6) accents
- ✅ **Light & Dark Mode** - Toggle between themes
- ✅ **Multi-language** - Supports English and Arabic, ready for translation
- ✅ **Multi-currency** - Support for different salary currencies
- ✅ **Activity Log** - Comprehensive audit trail for all system changes
- ✅ **Robust Validation** - Server and client-side validation

## System Behavior

- Employees can take their own attendance, admins can override manually
- Automatic absence marking if no attendance entry by midnight
- Work hours calculated based on shift start/end times
- Automatic shift reassignment when a shift is deleted
- Late marking (15 minutes after shift start) - no penalties, appears in payroll report
- Employee data archival - attendance and payroll deleted, personal details archived

## Setup Instructions

1. **First Login**: Head to the globals page and configure your organization's data and settings
2. **National ID Validation**: Update validation rules in `app/Services/ValidationServices.php` for your country
3. **Employee Creation**: Auto-generated passwords are emailed to new employees
4. **Add Languages**: Run `php artisan langscanner YOUR_LANG` to add translations

## Technical Notes

### IP-Based Attendance
- Currently supports IPv4 only (IPv6 planned)
- Requires static IP address(es)
- Can be disabled if not needed
- IPs configured in database

### National ID Parsing
- Default implementation for Egyptian IDs
- Extracts gender and age from national ID
- Located in `resources/js/Composables/useExtractPersonalDetails.js`
- Implement your own parser or remove if not needed

### Normalized Names
- Improves search for Arabic names and similar alphabets
- Optional feature - can be removed following steps in code

## TODO

- [ ] Improved mobile responsiveness
- [ ] IPv6 network support
- [ ] System data printing functionality
- [ ] Enhanced UI transitions
- [ ] Calendar improvements

## Default Credentials

After running the seeder:
- **Email**: `super@root.com`
- **Password**: `password`

## Tech Stack

- **Backend**: Laravel 10, PHP 8.2
- **Frontend**: Vue 3, Inertia.js
- **Styling**: Tailwind CSS v3
- **Database**: PostgreSQL
- **Authentication**: Laravel Breeze
- **Icons**: Heroicons

## License

This is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
You are free to use, modify, distribute, and sell it under the license terms.

---

**Maintained by Jai Samyukth**
