import DemoRequest from '../models/DemoRequest.model.js'
import { formatDemoRequestList } from '../presenters/demoRequest.presenter.js'

export async function getDemoRequests(req, res) {
  try {
    const { page = 1, limit = 10, status, subject, classGrade } = req.query
    
    // Build filter object
    const filter = {}
    if (status) filter.status = status
    if (subject) filter.subject = subject
    if (classGrade) filter.classGrade = parseInt(classGrade)

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit)
    
    // Get demo requests with pagination
    const [requests, total] = await Promise.all([
      DemoRequest.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      DemoRequest.countDocuments(filter)
    ])

    // Format response
    const formattedRequests = requests.map(formatDemoRequestList)
    
    res.json({
      success: true,
      data: {
        requests: formattedRequests,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / parseInt(limit)),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    })

  } catch (error) {
    console.error('Get demo requests error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch demo requests'
    })
  }
}

export async function getDemoRequestById(req, res) {
  try {
    const { id } = req.params
    
    const request = await DemoRequest.findById(id).lean()
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Demo request not found'
      })
    }

    res.json({
      success: true,
      data: formatDemoRequestList(request)
    })

  } catch (error) {
    console.error('Get demo request by ID error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch demo request'
    })
  }
}

export async function updateDemoRequestStatus(req, res) {
  try {
    const { id } = req.params
    const { status, notes } = req.body

    const request = await DemoRequest.findByIdAndUpdate(
      id,
      { status, adminNotes: notes, updatedAt: new Date() },
      { new: true }
    )

    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Demo request not found'
      })
    }

    res.json({
      success: true,
      message: 'Status updated successfully',
      data: formatDemoRequestList(request)
    })

  } catch (error) {
    console.error('Update demo request status error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update demo request'
    })
  }
}

export async function getDashboardStats(req, res) {
  try {
    const [
      totalRequests,
      pendingRequests,
      completedRequests,
      todayRequests,
      thisWeekRequests
    ] = await Promise.all([
      DemoRequest.countDocuments(),
      DemoRequest.countDocuments({ status: 'pending' }),
      DemoRequest.countDocuments({ status: 'completed' }),
      DemoRequest.countDocuments({
        createdAt: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0))
        }
      }),
      DemoRequest.countDocuments({
        createdAt: {
          $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      })
    ])

    res.json({
      success: true,
      data: {
        totalRequests,
        pendingRequests,
        completedRequests,
        todayRequests,
        thisWeekRequests
      }
    })

  } catch (error) {
    console.error('Get dashboard stats error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard statistics'
    })
  }
}
